import styled, { css } from "styled-components";

export const Container = styled.main`
  display: flex;

  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: 100vh;
`;

export const Content = styled.section`
  display: flex;
  position: relative;

  width: 100%;
  height: 80vh;

  justify-content: space-evenly;
  align-items: center;
`;

export const Steps = styled.div`
  display: flex;

  align-items: center;
`;

export const Step = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StepLabel = styled.div`
  display: flex;
  position: absolute;

  margin-top: 75px;

  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  border: 0;
  outline: 0;

  padding: 5px 10px;

  background-color: #dedede;

  width: 300px;
  height: 50px;

  text-align: center;

  ${({ theme }) => css`
    font-weight: ${theme.typography.weight[600]};
    color: ${theme.colors.dark_gray_700};
  `};
`;

export const Pulse = styled.div<{ background: 'active' | 'completed' | 'deactivate' }>`
  position: relative;
  display: flex;

  justify-content: center;
  align-items: center;

	border-radius: 50px;

  width: 20px;
  height: 20px;
  
  ${({ theme, background }) => background === 'active' && css`
    animation: pulse 2s infinite;
    box-shadow: 0 0 0 0 ${theme.colors.loading};
  `};

  transform: scale(1);

  svg {
    position: absolute;
  }

  @keyframes pulse {
    0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 #F55D00;
    }

    50% {
      transform: scale(1);
      box-shadow: 0 0 0 10px #EBEEF7;
    }

    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 #EBEEF7;
    }
  }
`;

export const Progress = styled.span<{ background: 'active' | 'completed' | 'deactivate' }>`
  position: relative;
  height: 2px;
  width: 200px;
  border-radius: 3px;

  margin: 0 10px;

  ${({ theme, background }) => css`
    ${background === 'active' && css`
      background-color: ${theme.colors.loading}1a;
    `};

    ${background === 'deactivate' && css`
      background-color: ${theme.colors.description};
    `};

    ${background === 'completed' && css`
      background-color: ${theme.colors.primary};
    `};
  `};

  span { 
    position:absolute;
    top:0;
    right:100%;
    bottom:0;
    left:0;
  };
  
  ${({ theme, background }) => background === 'active' && css`
    span {
      animation: borealisBar 2s linear infinite;
      background-color: ${theme.colors.loading};
    };
  `};

  @keyframes borealisBar {
    0% {
      left:0%;
      right:100%;
      width:0%;
    }
    10% {
      left:0%;
      right:75%;
      width:25%;
    }
    90% {
      right:0%;
      left:75%;
      width:25%;
    }
    100% {
      left:100%;
      right:0%;
      width:0%;
    }
  };
`;