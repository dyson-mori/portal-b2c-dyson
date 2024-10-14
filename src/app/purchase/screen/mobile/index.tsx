"use client";

import { Fragment } from "react";
import Image from "next/image";

import { Typography, Button } from "@/common";

import { Add, Minus } from "@/assets/svg";
import { useStorage } from "@/hooks/useStorage";
import { useWindowSize } from "@/hooks/useDimension";
import { formatPrice, ProductProps } from "@/utils";

import { Container, List, Product, ProductHeader, Quantity, Banner, Footer } from "./styles";

export default () => {
  const dimension = useWindowSize();

  const [storage, setStorage] = useStorage('@shopping-mori', null);

  const handleQuantity = (action: 'add' | 'remove', product: ProductProps) => {
    const change = storage.map(editing => {
      if (editing.id === product.id && action === 'add') {
        return { ...editing, quantity: editing.quantity + 1 };
      };

      if (editing.id === product.id && action === 'remove' && editing.quantity > 1) {
        return { ...editing, quantity: editing.quantity - 1 };
      };

      return editing;
    });
    
    setStorage(change);
  };

  return (
    <Container>
      <section style={{ margin: '20% 0 10% 0' }}>
        <Typography as="h1" size="extra_bold" weight="800" color="dark_gray_300" italic>Seu carrinho de compras</Typography>
      </section>

      <List>
        {
          storage && storage.map((item, index) => (
            <Fragment key={index}>
              <Product style={{ minHeight: dimension.height / 2.5 }}>

                <ProductHeader>
                  <Typography as="h3" size="medium" weight="600" family='montserrat'>{item.name}</Typography>
                </ProductHeader>

                <Banner>
                  <Image src={item.image} width={200} height={200} alt={item.name} style={{ objectFit: 'contain', width: '100%' }} />
                  <Typography as="p" size="banner_mobile" weight="800">{item.name}</Typography>
                </Banner>

                <Typography as="p" size="medium" weight="600">{item.price}</Typography>

                <Quantity>
                  <Button small onClick={() => handleQuantity('remove', item)}>
                    <Minus width={26} height={26} stroke="#303030" />
                  </Button>
                  <span>
                    <Typography as="p" weight='500'>{item.quantity}</Typography>
                  </span>
                  <Button small onClick={() => handleQuantity('add', item)}>
                    <Add width={26} height={26} stroke="#303030" />
                  </Button>
                </Quantity>
              </Product>
              {
                index !== storage.length - 1 && <div style={{ width: '90%', height: 1, backgroundColor: '#dedede' }} />
              }
            </Fragment>
          ))
        }
      </List>

      <Footer>
        <Typography as="h3" size="black" weight="500" italic>{formatPrice(storage)}</Typography>
        <div style={{ height: 10 }} />
        <Button>
          Comprar
        </Button>
      </Footer>

    </Container>
  )
};