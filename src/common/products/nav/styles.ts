import styled, { css } from "styled-components";

export const Container = styled.section`
  display: flex;

  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 50px;

  margin: 10px 0;
  padding: 0 45px;

  ${({ theme }) => css`
    @media (max-width: ${theme.dimension.mobile}px) {
      margin: 0px 0px;
      padding: 0px 0px;
    };
  `};
`;

export const Navigation = styled.nav`
  display: flex;
  width: 100%;

  ${({ theme }) => css`
    @media (max-width: ${theme.dimension.mobile}px) {
      overflow-x: auto;

      height: 50px;

      img {
        height: 100%;
      }
    };
  `};
`;

export const ButtonNav = styled.button`
  border: 0;
  padding: 5px;
  margin: 0 10px;
  background-color: transparent;

  font-family: var(--font-montserrat_alternates);
  font-size: 15px;
  font-weight: 500;
`;

export const Page = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;

  width: 50px;
  height: 50px;

  ${({ theme }) => css`
    @media (max-width: ${theme.dimension.mobile}px) {
      display: none;
    };
  `};
`;