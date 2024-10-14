import Image from "next/image";

import { Typography } from "@/common";
import { DataProductsProps } from "@/utils";

import { Container } from "./styles";

export default ({ products }: DataProductsProps) => {

  return (
    <Container>
      <Typography as="h1" size='banner_desktop' weight='800'>{products[0].name}</Typography>
      <Image
        style={{ objectFit: 'contain' }}
        width={550}
        height={550}
        src={products[0].image}
        alt={products[0].name}
      />
    </Container>
  )
};