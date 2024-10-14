import styled, { css } from "styled-components";

export const Container = styled.header`
  display: flex;

  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;

  width: 100%;
  height: 50px;

  padding: 0 50px;

  z-index: 2;

  transition: .3s ease-in-out;

  ${({ theme }) => css`
    @media (max-width: ${theme.dimension.mobile}px) {
      padding: 0 20px;
    };
  `};
`;

export const Nav = styled.nav`
  display: flex;

  width: 100%;

  padding: 0 30px;
`;
