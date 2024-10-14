import { CSSProperties, FC, ReactNode } from "react"

import { Container } from "./styles"
import { useTheme } from "styled-components";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  secondary?: boolean;
  small?: boolean;
};

export const Button: FC<ButtonProps> = ({
  children,
  secondary,
  small,
  ...rest
}) => {
  const theme = useTheme();

  const styles: CSSProperties = secondary ? {
    backgroundColor: 'transparent',
    color: theme.colors.primary,
  } : small ? {
    width: 50,
    backgroundColor: theme.colors.background,
    color: theme.colors.white,
    "&:hover": {
      backgroundColor: theme.colors.primary,
    }
  } : {
    width: 300,
    backgroundColor: theme.colors.primary,
    color: theme.colors.white
  };

  return (
    <Container style={styles} {...rest}>
      {children}
    </Container>
  )
}