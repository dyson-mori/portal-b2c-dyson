import type { Metadata } from "next";

import Stripe from 'stripe';

import { stripe } from '@/services';
import { formatDataProductStripe, ProductProps } from "@/utils";

import Product from './screen';

type ParamsProps = {
  params: object;
  searchParams: {
    id: string
  };
};

export async function generateMetadata({ searchParams }: ParamsProps): Promise<Metadata> {
  const productId = searchParams.id;

  const data = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  });

  if (!data) {
    throw new Error('Get Product by Id in Params')
  };

  return {
    title: data.name,
    description: data.description,
    openGraph: {
      title: data.name,
      description: data.description!
    }
  };
};

export default async function ProductPage(params: ParamsProps) {
  const data = await stripe.products.retrieve(params.searchParams.id, {
    expand: ['default_price']
  });

  const product = formatDataProductStripe(data);

  return <Product product={product} />
};