import styled, { css } from "styled-components";

export const Container = styled.main`
  display: flex;

  align-items: center;
  flex-direction: column;

  height: 100vh;
`;

export const List = styled.section`
  display: flex;

  flex-direction: column;
  align-items: center;

  width: 100%;
`;

export const Product = styled.div`
  display: flex;
  position: relative;

  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;

  width: 100%;

  padding: 10px;
`;

export const ProductHeader = styled.div`
  display: flex;

  justify-content: center;

  width: 100%;
`;

export const Banner = styled.div`
  display: flex;
  position: relative;

  justify-content: center;
  align-items: center;

  p {
    position: absolute;

    width: max-content;

    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    color: transparent;
    background-color: #999;
    text-shadow: -1px 3px 3px rgba(227, 234, 255, 1);
  };

  img {
    z-index: 1;
  }
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
  };
`;

export const Footer = styled.footer`
  position: sticky;
  bottom: 0;

  display: flex;

  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 10px;
  width: 100%;

  z-index: 1;

  ${({ theme }) => css`
    background-color: ${theme.colors.background};
    box-shadow: ${theme.settings.boxShadow};
  `};
`;