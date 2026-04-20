import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import prisma from '@/lib/prisma';
import { sendBookingConfirmationEmail } from '@/lib/resend';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2024-12-18.acacia' as any,
});


export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      name,
      email,
      phone,
      numberOfPeople,
      startDate,
      endDate,
      destination,
      budget,
      packageName,
      duration,
      specialRequests
    } = body;

    // 1. Create a "pending" booking in our database
    console.log('Tentative de création de la réservation dans Prisma...');
    const booking = await prisma.booking.create({
      data: {
        name,
        email,
        phone,
        numberOfPeople,
        startDate: new Date(startDate),
        endDate: endDate ? new Date(endDate) : null,
        destination,
        budget,
        packageName,
        duration,
        specialRequests,
        status: 'pending',
      }
    });
    console.log('Réservation créée avec succès ID:', booking.id);

    // 2. Determine price based on package
    let unitAmount = 150000; // Default $1500
    if (packageName?.includes('Standard')) unitAmount = 120000;
    if (packageName?.includes('Silver')) unitAmount = 180000;
    if (packageName?.includes('Gold')) unitAmount = 250000;

    // --- VRAI PAIEMENT STRIPE ---
    // Si la clé n'est pas configurée, on renvoie une erreur explicite
    if (!process.env.STRIPE_SECRET_KEY || process.env.STRIPE_SECRET_KEY === 'sk_test_placeholder') {
      return NextResponse.json({ error: 'Stripe API key is not configured.' }, { status: 500 });
    }

    console.log('Préparation des données Stripe...', { unitAmount, email });
    
    try {
      console.log('Appel à stripe.checkout.sessions.create...');
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'usd',
              product_data: {
                name: packageName || `Voyage en RDC : ${destination || 'Découverte'}`,
                description: `Réservation pour ${numberOfPeople} personne(s)`,
              },
              unit_amount: unitAmount,
            },
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `${process.env.NEXT_PUBLIC_APP_URL}/booking/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/booking`,
        customer_email: email,
        metadata: {
          bookingId: booking.id, // Critical for the webhook
          customerName: name,
          phone: phone,
          destination: destination,
          startDate: startDate,
          numberOfPeople: numberOfPeople,
          budget: budget
        }
      });
      console.log('Session Stripe créée avec succès ID:', session.id);

      // 3. Update the booking with the Stripe Session ID
      console.log('Mise à jour de la réservation avec le stripeSessionId...');
      await prisma.booking.update({
        where: { id: booking.id },
        data: { stripeSessionId: session.id }
      });
      console.log('Mise à jour Prisma effectuée.');

      return NextResponse.json({ url: session.url });
    } catch (stripeError: any) {
      console.error('--- ERREUR SPECIFIQUE STRIPE ---');
      console.error('Message:', stripeError.message);
      console.error('Type:', stripeError.type);
      console.error('Stack:', stripeError.stack);
      throw stripeError; // Re-throw to be caught by the main handler
    }
  } catch (error: any) {
    console.error('--- ERREUR CRITIQUE API CHECKOUT ---');
    console.error('Message:', error.message);
    console.error('Stack:', error.stack);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
