import type { Metadata } from "next";

import { stripe } from "@/services";

import ProductPage from "./products";
import { formatDataProductStripe, ProductProps } from "@/utils";

export const metadata: Metadata = {
  title: "Mori | Produtos",
  description: "Encontre seus produtos",
};

export default async function Page() {
  const { data } = await stripe.products.list({
    active: true,
    limit: 9,
    expand: ['data.default_price']
  });

  // console.log(data);

  const products = formatDataProductStripe(data);

  return <ProductPage products={products as ProductProps[]} />
};
