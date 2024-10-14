import styled, { css } from "styled-components";

export const Container = styled.main`
  display: flex;

  align-items: center;
  flex-direction: column;
  justify-content: center;
  
  height: 100vh;

  padding: 0 20%;

  ${({ theme }) => css`
    @media (max-width: ${theme.dimension.mobile}px) {
      padding: 0 5px;
    };

    @media (max-width: 844px) {
      padding: 0 5px;
    };
  `};
`;

export const Products = styled.section`
  display: flex;

  flex-direction: column;
  align-items: center;

  margin-bottom: 40px;

  width: 100%;

  ${({ theme }) => css`
    @media (max-width: ${theme.dimension.mobile}px) {
      /* justify-content: space-around; */
      /* padding: 0 10px; */
    };
  `};

  /* overflow-y: auto;
  overflow-x: hidden; */
`;

export const Product = styled.div`
  display: flex;

  align-items: center;

  width: 100%;
  height: 100px;

  margin: 5px;
  padding: 5px;

  ${({ theme }) => css`
    @media (max-width: ${theme.dimension.mobile}px) {
      .divisao {
        /* width: 100%; */
        /* padding: 0 10px; */
      }
    };
  `};
`;

export const Info = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;
  width: 100%;

  h3 {
    margin: 0 2%;
    width: 50%;
  };

  .price_quantity {
    display: flex;
    width: 100%;

    justify-content: space-between;
    align-items: center;
  };

  @media (max-width: 390px) {
    flex-direction: column;
    align-items: start;

    .price_quantity {
      margin: 0 5px;
    }
  };
`;

export const Quantity = styled.div`
  display: flex;

  justify-content: center;

  width: 150px;

  border: 1px solid #ddd;
  border-radius: 3px;

  span {
    display: flex;

    align-items: center;
    justify-content: center;

    width: 50px;

    cursor: default;
  };

  ${({ theme }) => css`
    @media (max-width: 390px) {
      width: 130px;
      /* height: 45px; */
    };
  `};
`;

export const Price = styled.div`
  display: flex;

  ${({ theme }) => css`
    @media (max-width: 500px) {
      margin-bottom: 20px;
    };
  `};
`;

export const Payment = styled.section`
  display: flex;

  align-items: center;
  justify-content: space-between;

  width: 100%;

  ${({ theme }) => css`
    @media (max-width: 500px) {
      flex-direction: column;
    };
  `};
`;