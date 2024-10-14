import styled, { css } from "styled-components";
import Link from 'next/link';

export const Container = styled.section`
  display: flex;
  position: relative;

  flex-wrap: wrap;
  justify-content: space-evenly;

  width: 100%;

  margin: 10px 0;

  ${({ theme }) => css`
    @media (max-width: ${theme.dimension.mobile}px) {
      margin: 0;
      flex-direction: column;
      align-items: center;
    };
  `};
`;

export const AddProduct = styled.div`
  position: absolute;

  top: 0px;
  right: 0px;

  button {
    width: 70px!important;
    height: 70px;
  };
`;

export const Product = styled(Link)`
  display: flex;

  justify-content: center;
  align-items: center;

  position: relative;

  margin: 10px 0;

  color: #303030;

  img {
    width: 100%;
    height: 100%;
  }

  footer {
    display: flex;
    position: absolute;
  
    bottom: 0;

    justify-content: space-between;

    width: 100%;

    padding: 20px 30px;
  };

  span {
    display: flex;

    align-items: end;
    font-size: 10px;

    font-weight: 500;
  };

  ${({ theme }) => css`
    @media (max-width: ${theme.dimension.mobile}px) {
      margin: 0;
      margin-bottom: 5px;
    };
  `};
`;

export const Skeleton = styled.div`
  background: #eee;
  background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);

  border-radius: 6px;

  margin: 10px 0;

  background-size: 200% 100%;

  animation: 1.5s shine linear infinite;

  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  @keyframes shine {
    to {
      background-position-x: -200%;
    }
  }
`;