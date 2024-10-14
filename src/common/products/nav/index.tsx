import { useState } from "react";

import { stripe } from "@/services";
import { Typography } from "@/common";
import { ArrowLeft, ArrowRight } from "@/assets/svg";
import { formatDataProductStripe, ProductProps } from "@/utils";

import { Button } from '../..';

import { Container, ButtonNav, Page, Navigation } from "./styles";
import { useTheme } from "styled-components";
import { useWindowSize } from "@/hooks/useDimension";

interface NavProps {
  products: ProductProps[];
  setProducts(product: ProductProps[]): void;
  loading: boolean;
  setLoading(loading: boolean): void;
  categories: {
    key: string;
    title: string;
  }[];
};

export default ({ products, categories, setProducts, setLoading }: NavProps) => {
  const theme = useTheme();
  const dimension = useWindowSize();

  const [select, setSelect] = useState('all');
  const [page, setPage] = useState(1);

  const nextPage = async () => {
    setLoading(true);

    const { data } = await stripe.products.list({
      active: true,
      starting_after: products[products.length - 1].id,
      expand: [ 'data.default_price' ]
    });

    const result = formatDataProductStripe(data);

    setLoading(false);
    return setProducts(result);
  };

  const prevPage = async () => {};

  const handleSelectCategory = async (name: string) => {
    setSelect(name);
    setLoading(true);

    if (name === 'all') {
      const { data } = await stripe.products.list({
        active: true,
        limit: 9,
        expand: [ 'data.default_price' ]
      });

      const result = formatDataProductStripe(data);

      setLoading(false);
      setProducts(result);

      return;
    };

    const { data } = await stripe.products.search({
      query: `description:\'#${name}\'`,
      limit: 9,
      expand: [ 'data.default_price' ]
    });

    const result = formatDataProductStripe(data);

    setLoading(false);
    return setProducts(result);
  };

  return (
    <Container>
      <Navigation>
        {
          categories.map(e => (
            <ButtonNav key={e.key} onClick={() => handleSelectCategory(e.key)}
              style={{
                fontWeight: e.key === select ? 'bold' : 500,
                color: e.key === select ? '#41B06E' : '#303030',
                cursor: e.key === select ? 'default' : 'pointer'
              }}
            >
              {e.title}
            </ButtonNav>
          ))
        }
      </Navigation>

      {
        theme.dimension.mobile < dimension.width && (
          <>
            <Button small onClick={prevPage}>
              <ArrowLeft width={20} height={20} stroke="#303030" strokeWidth={1.5} />
            </Button>

            <Page>
              <Typography as="p" size="light" weight="600">{page} de ?</Typography>
            </Page>

            <Button small onClick={nextPage}>
              <ArrowRight width={20} height={20} stroke="#303030" strokeWidth={1.5} />
            </Button>
          </>
        )
      }
    </Container>
  )
};