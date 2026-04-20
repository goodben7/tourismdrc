import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { Resend } from 'resend';
import prisma from '@/lib/prisma';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2026-03-25.dahlia' as any,
});

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.text();
  const signature = req.headers.get('stripe-signature') as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    console.error(`Webhook signature verification failed: ${err.message}`);
    return NextResponse.json({ error: 'Webhook Error' }, { status: 400 });
  }

  // Handle the event
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;

    // --- 1. DB PERSISTENCE (PRISMA) ---
    const bookingId = session.metadata?.bookingId;

    if (bookingId) {
      await prisma.booking.update({
        where: { id: bookingId },
        data: { status: 'paid' }
      });
      console.log(`Booking ${bookingId} updated to 'paid'`);
    }
    
    console.log(`Payment successful for session: ${session.id}`);
    console.log('Customer Metadata:', session.metadata);

    // --- 2. AUTOMATIC EMAIL CONFIRMATION (RESEND) ---
    if (process.env.RESEND_API_KEY && session.customer_details?.email) {
      try {
        await resend.emails.send({
          from: 'Tourism DRC <booking@tourismdrc.com>',
          to: session.customer_details.email,
          subject: 'Confirmation de votre réservation - Tourism DRC',
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px;">
              <h1 style="color: #0c0a09; text-align: center;">Félicitations !</h1>
              <p>Bonjour ${session.metadata?.customerName || 'Cher voyageur'},</p>
              <p>Votre paiement a été validé avec succès pour votre prochaine aventure en RDC.</p>
              <div style="background-color: #f8fafc; padding: 15px; border-radius: 8px; margin: 20px 0;">
                <h3 style="margin-top: 0;">Récapitulatif de la réservation :</h3>
                <ul style="list-style: none; padding: 0;">
                  <li><strong>Destination :</strong> ${session.metadata?.destination}</li>
                  <li><strong>Date de début :</strong> ${session.metadata?.startDate}</li>
                  <li><strong>Nombre de personnes :</strong> ${session.metadata?.numberOfPeople}</li>
                </ul>
              </div>
              <p>Notre équipe va vous contacter sous peu pour finaliser les détails logistiques.</p>
              <p style="margin-top: 40px; color: #64748b; font-size: 12px; text-align: center;">
                Tourism DRC - L'excellence au cœur de l'Afrique.
              </p>
            </div>
          `,
        });
        console.log(`Confirmation email sent to ${session.customer_details.email}`);
      } catch (mailError) {
        console.error('Error sending confirmation email:', mailError);
      }
    }
  }

  return NextResponse.json({ received: true });
}
