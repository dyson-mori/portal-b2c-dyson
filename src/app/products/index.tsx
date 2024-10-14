"use client";

import { useState } from "react";

import Link from "next/link";

import { DataProductsProps } from "@/utils";
import { Products } from "@/common";

import { Container, Footer } from "./styles";

const categories = [
  { key: 'all', title: 'Todos' },
  { key: 'chains', title: 'Correntes' },
  { key: 'rings', title: 'Aneis' },
  { key: 'clock', title: 'Relógios' },
  { key: 'glasses', title: 'Óculos' },
];

export default function Home({ products }: DataProductsProps) {
  const [data, setData] = useState(products);

  const [loading, setLoading] = useState(false);

  return (
    <Container>
      <Products.Banner products={products} />

      <Products.Nav
        loading={loading}
        products={products}
        categories={categories}
        setProducts={setData}
        setLoading={setLoading}
      />

      <Products.Root products={data} loading={loading} />

      <Footer>
        <Link href="/contact">contatos</Link>
        &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <Link href="/about">sobre</Link>
        &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <Link href="/media">medias</Link>
      </Footer>
    </Container>
  );
}
