import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import prisma from '@/lib/prisma';
import { sendBookingConfirmationEmail } from '@/lib/resend';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2024-12-18.acacia' as any,
});

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

export async function POST(req: Request) {
  const body = await req.text();
  const signature = req.headers.get('stripe-signature') as string;

  let event: Stripe.Event;

  try {
    if (!signature || !webhookSecret) {
      console.error('Missing Stripe signature or webhook secret');
      return NextResponse.json({ error: 'Missing signature or secret' }, { status: 400 });
    }
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err: any) {
    console.error(`Webhook signature verification failed: ${err.message}`);
    return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
  }

  // Handle the event
  console.log('--- STRIPE WEBHOOK EVENT ---', event.type);

  try {
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as Stripe.Checkout.Session;
      
      const bookingId = session.metadata?.bookingId;
      const customerEmail = session.customer_details?.email;
      const customerName = session.metadata?.customerName || 'Client';

      if (bookingId) {
        console.log(`Updating booking ${bookingId} to PAID status...`);
        
        // 1. Update Booking Status in Database
        const updatedBooking = await prisma.booking.update({
          where: { id: bookingId },
          data: { status: 'paid' },
        });

        console.log('Booking updated successfully:', updatedBooking.id);

        // 2. Send Confirmation Email via Resend
        if (customerEmail) {
          console.log(`Sending confirmation email to ${customerEmail}...`);
          await sendBookingConfirmationEmail({
            email: customerEmail,
            name: customerName,
            packageName: updatedBooking.packageName || 'Voyage TourismDRC',
            startDate: updatedBooking.startDate.toISOString(),
            numberOfPeople: updatedBooking.numberOfPeople || '1',
            budget: updatedBooking.budget || '0'
          });
          console.log('Email sent.');
        }
      }
    }

    return NextResponse.json({ received: true });
  } catch (error: any) {
    console.error('Error processing webhook:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
