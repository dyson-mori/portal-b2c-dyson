import Image from "next/image";

import { Add, ShoppingCart } from "@/assets/svg";
import { useStorage } from "@/hooks/useStorage";

import { Button, Typography } from '../..';

import { Container, AddProduct, Product, Skeleton } from "./styles";
import { ProductProps } from "@/utils";
import { useWindowSize } from "@/hooks/useDimension";
import { useTheme } from "styled-components";

interface ProductsProps {
  products: ProductProps[];
  loading: boolean;
};

export default ({ products, loading }: ProductsProps) => {
  const dimension = useWindowSize();
  const theme = useTheme();

  const [storage, setStorage] = useStorage('@shopping-mori', null);

  const styles = {
    width: theme.dimension.mobile > dimension.width ? dimension.width - 10 : dimension.width / 3.6,
    height: theme.dimension.mobile > dimension.width ? dimension.width - 10 : dimension.width / 3.6,
  };

  const addToCart = (e: any, product: ProductProps) => {
    e.preventDefault();

    const find = storage.find((p: any) => p.id === product.id);

    if (find) {
      const filter = storage.filter((p: any) => p.id !== product.id)
      return setStorage(filter);
    }

    return setStorage(prev => [...prev, { ...product, quantity: 1 }] as any);
  };

  const Icons = ({ id }: any) => {
    const has = storage ? storage.find(item => item.id === id) : [];

    if (has) {
      return <ShoppingCart width={25} height={25} stroke="#41B06E" strokeWidth={1.5} />
    };

    return <Add width={25} height={25} stroke="#303030" strokeWidth={1.5} />
  };

  return (
    <Container>
      {loading && Array.from({ length: 9 }).map((_, index) => <Skeleton key={index} style={styles} />)}
      {
        !loading && products.map((prod) => (
          <Product key={prod.id} href={`/product?id=${prod.id}`} style={styles}>

            <AddProduct>
              <Button small onClick={(evt) => addToCart(evt, prod)}>
                <Icons id={prod.id} />
              </Button>
            </AddProduct>

            <Image src={prod.image} width={1500} height={1500} style={{ objectFit: 'contain' }} alt="alt" />

            <footer>
              <Typography as="h3" size="medium" weight="500" family="montserrat">
                {prod.name}
              </Typography>
              <Typography as="p" size="medium" weight="500" family="montserrat">{prod.price.replace('R$', '')}</Typography>
            </footer>

          </Product>
        ))
      }
    </Container>
  )
};