// pages/api/stripe-webhook.js
import { buffer } from 'micro';
import Stripe from 'stripe';
import { db } from '../../lib/firebaseAdmin';

export const config = {
  api: {
    bodyParser: false, // Stripe requires the raw body to validate the signature.
  },
};

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  const buf = await buffer(req);
  const sig = req.headers['stripe-signature'];

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      buf,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error(`Webhook signature verification failed.`, err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the checkout session completion event
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const previewId = session.metadata.previewId;

    try {
      await db.collection("previews").doc(previewId).update({
        paymentStatus: 'paid',
        checkoutSessionId: session.id,
      });
      console.log(`Preview ${previewId} marked as paid.`);
    } catch (error) {
      console.error("Error updating preview record:", error);
    }
  }

  res.json({ received: true });
}