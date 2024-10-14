import styled, { css } from "styled-components";

export const Container = styled.section`
  display: flex;
  position: relative;

  justify-content: center;
  align-items: center;

  width: 100%;
  height: 90vh;

  background-color: #E3EAFF;

  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  h1 {
    position: absolute;

    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    color: transparent;
    background-color: #999;
    text-shadow: -1px 3px 3px rgba(227, 234, 255, 1);
  };

  img {
    z-index: 1;

    /* width: max-content; */
  };

  @media (max-width: 767px) {
    height: 60vh;

    img {
      width: 100%;
    }

    h1 {
      ${({ theme }) => css`
        font-size: ${theme.typography.size.banner_mobile};
      `};
    };
  };
`;