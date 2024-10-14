import styled, { css, keyframes } from "styled-components";

export const Container = styled.main`
  display: flex;

  align-items: center;
  justify-content: center;
  flex-direction: column;

  height: 100vh;
  width: 100%;
`;

export const Product = styled.section`
  display: flex;
  position: relative;

  justify-content: center;
  align-items: center;

  h1 {
    position: absolute;

    text-align: center;

    width: max-content;

    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    color: transparent;
    background-color: #999;
    text-shadow: -1px 3px 3px rgba(235, 238, 247, 1);
  };

  img {
    z-index: 1;

    width: 70%;
  };
`;

export const Options = styled.section`
  display: flex;

  button {
    border: 0;
    background-color: transparent;
  }
`;

export const Description = styled.section`
  display: flex;

  /* position: absolute;
  bottom: 100px; */

  margin-top: 40px;

  flex-direction: column;
  align-items: center;
`;

export const Skeleton = styled.div`
  background: #eee;
  background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);

  border-radius: 6px;

  background-size: 200% 100%;

  animation: 1.5s shine linear infinite;

  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  @keyframes shine {
    to {
      background-position-x: -200%;
    }
  }
`;

export const Transiction = styled.div<{ transiction: 'start' | 'transiction' | 'end' }>`
  position: absolute;

  transition: .5s;

  ${({ transiction }) => css`
    width: ${
      transiction === 'start' ? '0%' :
      transiction === 'transiction' ? '100%' : '0%'
    };

    ${
      transiction === 'start' || transiction === 'transiction' ? css`
        left: 0;
      ` : css`
        right: 0;
      `
    }
  `};

  height: 100%;

  ${({ theme }) => css`
    background-color: ${theme.colors.background};
  `};

  z-index: 1;

  /* div::before,
  div::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    z-index: 1;
  };

  div::before {
    animation: typewriter 1s ease-out forwards;
  }
  
  @keyframes typewriter {
    to {
      left: 100%;
    }
  }; */
`;