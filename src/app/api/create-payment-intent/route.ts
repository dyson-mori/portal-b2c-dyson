import { NextRequest, NextResponse } from "next/server";

import { stripe } from "@/services";
import { ProductProps } from "@/utils";

export async function POST(request: NextRequest) {
  const { products }: { products: ProductProps[] } = await request.json();

  if (!products) {
    return NextResponse.json({ error: 'Price Not Found' });
  };

  const successUrl = `http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}`;
  const cancelUrl = `http://localhost:3000/purchase`;

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: 'payment',
    currency: 'brl',
    billing_address_collection: 'required',
    shipping_address_collection: {
      allowed_countries: ['BR'],
    },
    phone_number_collection: {
      enabled: true,
    },
    payment_method_types: [
      'card',
      // 'bancontact',
      // 'card',
      // 'eps',
      // 'giropay',
      // 'ideal',
      // 'p24',
      // 'sepa_debit',
    ],
    // payment_method_configuration: 'pmc_234',
    line_items: products.map(e => ({
      price: e.price_code.id,
      quantity: e.quantity,
      adjustable_quantity: {
        enabled: true,
        maximum: 1
      },
    }))
  });

  return NextResponse.json(checkoutSession);
};