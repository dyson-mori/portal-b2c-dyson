import Stripe from 'stripe';
import { ProductProps } from './interface';
import React from 'react';

export const calculateOrderAmount = (items: ProductProps[]) => {
  let total = 0;

  items.forEach(item => total += item.unit_amount);

  return total;
};

export const formatPrice = (items: ProductProps[]) => {
  let total = 0;

  items.forEach(item => total += (item.unit_amount * item.quantity));

  const result = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(total / 100);

  return result;
};

// type FormatProductProps<T> = T extends ProductProps[]
//   ? Stripe.Product[] : T extends ProductProps
//   ? Stripe.Product : any;

type FormatProductProps =
  | Stripe.Product[]
  | Stripe.Product;

export function formatDataProductStripe(data: FormatProductProps) {
  if (Array.isArray(data)) {
    return data.map(product => {
      const price = product.default_price as Stripe.Price;

      return {
        id: product.id,
        name: product.name,
        image: product.images[0],
        image_test: product.images,
        description: product.description,
        unit_amount: price.unit_amount,
        price_code: price as any,
        quantity: 1,
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(price.unit_amount! / 100)
      }
    });
  }

  const price = data.default_price as Stripe.Price;
  return {
    id: data.id,
    name: data.name,
    image: data.images[0],
    description: data.description!,
    unit_amount: price.unit_amount!,
    price_code: price as any,
    quantity: 1,
    price: new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price.unit_amount! / 100)
  }

}

export * from './interface';