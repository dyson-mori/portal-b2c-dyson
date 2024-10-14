import styled, { css } from "styled-components";

export const Container = styled.main`
  display: flex;

  height: 100vh;

  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`;

export const Product = styled.section`
  display: flex;
  position: relative;

  justify-content: center;
  align-items: center;

  width: 100%;

  h1 {
    position: absolute;

    text-align: center;

    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    color: transparent;
    background-color: #999;
    text-shadow: -1px 3px 3px rgba(235, 238, 247, 1);
  };

  img {
    z-index: 1;

    width: 30%;
    height: auto;
  };

  ${({ theme }) => css`
    @media (max-width: ${theme.dimension.mobile}px) {
      img {
        width: 100%;
        height: auto;
      }
    };
  `};
`;

export const Description = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;

  width: 100%;
`;

export const NameAndPrice = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;

  width: 50%;

  .price {
    display: flex;

    align-items: end;
  };

  ${({ theme }) => css`
    @media (max-width: ${theme.dimension.mobile}px) {
      padding: 0 20px;
      width: 100%;
    };
  `};
`;

export const Actions = styled.div`
  display: flex;
`;