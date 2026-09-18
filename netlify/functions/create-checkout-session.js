const Stripe = require('stripe');

exports.handler = async function (event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  let body;
  try {
    body = JSON.parse(event.body);
  } catch {
    return { statusCode: 400, body: 'Invalid request body' };
  }

  const { amount_cents, description, metadata } = body;

  if (!Number.isInteger(amount_cents) || amount_cents < 50) {
    return { statusCode: 400, body: 'amount_cents must be an integer >= 50' };
  }

  const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
  const origin = event.headers.origin || 'https://mitoc.mit.edu';

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'usd',
            unit_amount: amount_cents,
            product_data: { name: description },
          },
          quantity: 1,
        },
      ],
      metadata: metadata || {},
      success_url: `${origin}/pay/success`,
      cancel_url: `${origin}/pay`,
    });

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: session.url }),
    };
  } catch (err) {
    return { statusCode: 500, body: err.message };
  }
};
