import Stripe from 'stripe';

export const stripe = new Stripe('sk_test_51Q6hCwFQmzXupGEAjGuNFZBxma9HfnndbOoIHO5IJdJwLkCXFyULNNFVj9qqmrrZZ9A0Vw8ZfTpB77xpUASqIIXP00xaaScw5u' as string, {
  apiVersion: '2024-09-30.acacia',
  httpClient: Stripe.createFetchHttpClient(),
  appInfo: {
    name: 'mori'
  }
});

// export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

type UrlProps = 'create-payment-intent' | 'tracking';
type MethodProps = 'GET' | 'POST' | 'PUT' | 'DELETE';

interface useFetchProps {
  url: string;
  method: MethodProps;
  body?: object;
};

export const useFetch = async ({ url, method, body }: useFetchProps) => {
  const res = await fetch(`api/${url}`, {
    method,
    headers: {
      "Content-Type": "application/json"
    },
    body: body && JSON.stringify(body)
  });

  if (!res.ok) {
    throw new Error(`${url} fail`)
  };

  return res.json();
};
