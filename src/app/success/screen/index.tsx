"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Stripe from "stripe";

import { useWindowSize } from "@/hooks/useDimension";
import { useStorage } from "@/hooks/useStorage";
import { Typography } from "@/common";

import { Container, Description, Product, Options, Transiction } from "./styles";

interface Props {
  product: Stripe.Response<Stripe.Checkout.Session>
};

export default ({ product }: Props) => {
  const [itemId, setItemId] = useState<number>(0);
  const [transiction, setTransiction] = useState<'start' | 'transiction' | 'end'>('start');

  const dimension = useWindowSize();
  const [_, setStorage] = useStorage('@shopping-mori', []);

  const data = {
    id: product.id,
    products: product.line_items?.data.map(item => ({
      id: item.id,
      name: item.price?.product.name.replace('Harley Davidson', ''),
      description: item.price?.product.description,
      image: item.price?.product.images[0]
    }))
  };

  useEffect(() => setStorage([]), []);

  const handleTransiction = (i: number) => {
    if (i === itemId) return;

    setTransiction('transiction');

    setTimeout(() => {
      setTransiction('end');
      setItemId(i);
    }, 800);

    setTimeout(() => {
      setTransiction('start');
    }, 1300);
  };

  return (
    <Container>
      <Product>
        <Typography
          as="h1"
          size='banner_desktop'
          weight='800'
          italic>{data.products[itemId].name}</Typography>
        <Image
          style={{ objectFit: 'contain' }}
          width={dimension.width / 2.2}
          height={dimension.height / 2.2}
          src={data.products[itemId].image}
          alt={data.products[itemId].name}
        />

        <Transiction transiction={transiction} />

      </Product>

      <Options>
        {data.products?.map((e, i) => (
          <button key={i} onClick={() => handleTransiction(i)}>
            <Image
              style={{ objectFit: 'contain' }}
              width={100}
              height={50}
              src={e.image}
              alt={e.name}
            />
          </button>
        ))}
      </Options>

      <Description>
        <Typography as="h2" size='black' weight="800" color='dark_gray_300'>
          🎉 Agradecemos imensamente pela sua compra! 🎉
        </Typography>
        <div style={{ height: 20 }} />
        <Typography as="p" family='montserrat'>
          Estamos preparando o seu produto e entraremos em contato em breve :)
        </Typography>
      </Description>

      {/* <div style={{ display: 'flex', position: 'absolute', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh', backgroundColor: '#3030305a', zIndex: 1 }}>
        <div style={{ width: '80%', height: '80vh', backgroundColor: '#fff', overflowY: 'auto', borderRadius: 9 }}>
          <pre style={{ overflow: 'hidden', padding: '20px 50px' }}>
            {JSON.stringify(product, null, 2)}
          </pre>
        </div>
      </div> */}

    </Container>
  );
}

/*
 * @params: http://localhost:3000/success
 * ?payment_intent=pi_3Q7IbfFQmzXupGEA0cPVHjmh
 * &payment_intent_client_secret=pi_3Q7IbfFQmzXupGEA0cPVHjmh_secret_XN3lrj2osnEtDyXJK4L9w2Ny3
 * &redirect_status=succeeded
 * 
 * http://localhost:3000/success?session_id=cs_test_a1MRbDNgcburAZI5DXQDnx2YubTqFGVl46Tygt6Yt5zdZuxa1zFe4Ql4Zw
 * 
 * http://localhost:3000/success?session_id=cs_test_b1Y2zjWm0YZbJkB7bfeLmhg22RZMD1EkF64dxHjhFz6EnxwlTyKAvNvNQe
 * 
 * http://localhost:3000/success?session_id=cs_test_b12AMYxAraOU99MfxiCxxCh0GanLujwTCAGoWObG8YTCNbKQiWOPDr6O2s
 * 
 * http://localhost:3000/success?session_id=cs_test_b1xfv55xKjF9MGPVAkLYIYrCA2421ZJawIN9TRhsGOChItHeOW5ITVtkHU
*/