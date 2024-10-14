"use client";

import Image from 'next/image';
import { Fragment, useState } from 'react';

import { useTheme } from 'styled-components';

import { DotLottiePlayer } from '@dotlottie/react-player';

import { useStorage } from "@/hooks/useStorage";
import { formatPrice, ProductProps } from "@/utils";
import { useWindowSize } from "@/hooks/useDimension";
import { CloseCircle, Minus, Add } from "@/assets/svg";
import { useFetch } from '@/services';

import { Button, Typography } from "@/common";

import { Container, Payment, Products, Product, Price, Quantity, Info } from "./styles";

export default () => {
  const dimension = useWindowSize();
  const theme = useTheme();

  const [storage, setStorage] = useStorage('@shopping-mori', null);
  const [loading, setLoading] = useState(false);

  const handleRemove = (id: string) => {
    const remove = storage.filter(stor => stor.id !== id);
    return setStorage(remove);
  };

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

  const handlePurchase = () => {
    setLoading(true);

    useFetch({
      method: 'POST',
      url: 'create-payment-intent',
      body: {
        products: storage
      }
    })
      .then(data => window.location.href = data.url)
      .finally(() => setLoading(false))
  };

  const lottie_styles = {
    display: 'flex',
    maxWidth: "300px"
  };

  return (
    <Container>
      {/* <section style={styles}>
        <Typography as="h1" size="extra_bold" weight="800">Seu carrinho</Typography>
      </section> */}

      <Products>
        {storage.length > 0 ?
          storage.map((product, index) => (
            <Fragment key={index}>
              <Product>
                <Image src={product.image} width={100} height={100} style={{ objectFit: 'contain' }} alt="kosa" />

                <Info>
                  <Typography as="h3" weight='800' family='montserrat'>{product.name}</Typography>

                  <div className='price_quantity'>
                    <Typography as="p" weight='500' family='montserrat'>{product.price}</Typography>

                    <Quantity>
                      <Button small onClick={() => handleQuantity('remove', product)}>
                        <Minus width={26} height={26} stroke="#303030" />
                      </Button>
                      <span>
                        <Typography as="p" weight='500'>{product.quantity}</Typography>
                      </span>
                      <Button small onClick={() => handleQuantity('add', product)}>
                        <Add width={26} height={26} stroke="#303030" />
                      </Button>
                    </Quantity>
                  </div>
                </Info>

                {/* <Button small onClick={() => handleRemove(product.id)}>
                  <CloseCircle width={24} height={24} stroke="#FF0036" strokeWidth={2} />
                </Button> */}
              </Product>
              {
                index !== storage.length - 1 && <div style={{ width: '95%', height: 1, backgroundColor: '#dedede' }} />
              }
            </Fragment>
          )) : (
            <DotLottiePlayer style={lottie_styles} src="/lottie/marks-empty-card.lottie" autoplay />
          )
        }
      </Products>

      <Payment>
        <Price>
          <Typography as="h3" color="dark_gray_300" weight="800">Total</Typography>
          &nbsp;
          <Typography as="p" color="dark_gray_300">{formatPrice(storage)}</Typography>
        </Price>

        <Button onClick={handlePurchase}>{loading ? 'Carregando' : 'Comprar'}</Button>
      </Payment>
    </Container>
  )
}