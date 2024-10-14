"use client";

import Image from 'next/image';

import { useRouter } from 'next/navigation';
import { useTheme } from 'styled-components';

import { useStorage } from '@/hooks/useStorage';
import { useWindowSize } from '@/hooks/useDimension';
import { ProductProps } from "@/utils";
import { Button, Typography } from '@/common';
import { ShoppingCart } from '@/assets/svg';

import { Container, NameAndPrice, Product, Actions, Description } from "./styles";

export default ({ product } : { product: ProductProps }) => {
  const dimension = useWindowSize();
  const navigation = useRouter();
  const theme = useTheme();

  const [storage, setStorage] = useStorage('@shopping-mori', []);

  const onPurchase = () => {
    const find = storage.find((p: any) => p.id === product.id);
    
    if (find) return navigation.push('/purchase');

    setStorage(prev => [...prev, product] as any);
    return navigation.push('/purchase');
  };

  const fix = {
    banner_name: theme.dimension.window_size().isMobile ? 'banner_mobile' : 'banner_desktop' as any,
    name: {
      size: theme.dimension.window_size().isMobile ? 'black' : 'title' as any,
      weight: theme.dimension.window_size().isMobile ? '600' : '500' as any
    }
  };

  return (
    <Container>

      <Product>
        <Typography as="h1" size={fix.banner_name} weight='800' >{product.name}</Typography>
        <Image style={{ objectFit: 'contain' }} width={1000} height={1000} src={product.image} alt={product.name} />
      </Product>

      <Description>

        <NameAndPrice>
          <Typography as="h2" size={fix.name.size} weight={fix.name.weight} italic>{product.name}</Typography>

          <div className="price">
            <Typography as="p" size={theme.dimension.window_size().isMobile ? 'extra_light' : 'medium'} weight={theme.dimension.window_size().isMobile ? '500' : '600'} color='dark_gray_500' italic>R$</Typography>
            <Typography as="p" size={theme.dimension.window_size().isMobile ? 'extra_bold' : 'black'} color='dark_gray_500' italic>
              {product.price.replace('R$', '')}
            </Typography>
          </div>
        </NameAndPrice>

        <div style={{ height: 30 }} />

        <Typography style={{ textAlign: 'center', width: theme.dimension.window_size().isMobile ? '100%' : '50%' }} as="p" size='medium' color='dark_gray_700' family='montserrat'>
          {product.description}
        </Typography>

        <div style={{ height: 30 }} />

        <Actions>
          <Button onClick={onPurchase}>Comprar</Button>
          <Button small onClick={() => {}}>
            <ShoppingCart width={24} height={24} strokeWidth={1.5} stroke={theme.colors.primary} />
          </Button>
        </Actions>

      </Description>

    </Container>
  )
};
