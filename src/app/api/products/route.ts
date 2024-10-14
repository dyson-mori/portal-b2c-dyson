import { NextRequest, NextResponse } from "next/server";

import { stripe } from "@/services";

export async function GET(request: NextRequest) {
  const product = await stripe.products.list({
    expand: ['data.default_price']
  });

  if (!product) {
    throw new Error('product fail')
  };

  return NextResponse.json(product.data[0]);
};

export async function POST(request: NextRequest) {
  const { name, description, images, price } = await request.json();

  const product = await stripe.products.create({
    name,
    description,
    images,
    default_price_data: {
      currency: 'brl',
      unit_amount: price,
    },
  });

  if (!product) {
    throw new Error('product fail')
    // return NextResponse.json({ message: 'nothing' });
  };

  return NextResponse.json(product);
};