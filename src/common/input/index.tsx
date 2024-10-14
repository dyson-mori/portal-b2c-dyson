import React from "react";

import { Container } from "./styles";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<InputProps> = ({ children, ...rest }) => {

  return (
    <Container>
      <div>
        {children}
      </div>
      <input {...rest} />
    </Container>
  )
};