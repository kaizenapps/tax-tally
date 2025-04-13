// pages/api/create-checkout-session.js
import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });

  const { previewId } = req.body;
  if (!previewId) {
    return res.status(400).json({ error: 'Missing preview ID' });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [{
        price_data: {
          currency: 'usd',
          product_data: { name: 'Tax Form PDF' },
          unit_amount: 299, // $2.99 expressed in cents
        },
        quantity: 1,
      }],
      success_url: `https://tax-tally.com/preview/${previewId}?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `https://tax-tally.com/preview/${previewId}`,
      metadata: { previewId }
    });

    res.status(200).json({ id: session.id, url: session.url });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}