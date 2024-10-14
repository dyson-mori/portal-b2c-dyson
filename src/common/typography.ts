import styled, { css } from "styled-components";

import theme from "@/styles/theme";

interface Props {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'p';
  size?: keyof typeof theme.typography.size;
  color?: keyof typeof theme.colors;
  family?: keyof typeof theme.typography.family;
  weight?: keyof typeof theme.typography.weight;
  italic?: boolean
};

export const Typography = styled.div<Props>`
  ${({ theme, size = 'medium', color = 'dark_gray_300', family = 'default', weight = '400', italic = false, children }) => css`
    color: ${theme.colors[color]};
    font-family: var(${theme.typography.family[family]});
    font-weight: ${theme.typography.weight[weight]};
    font-style: ${theme.typography.style[italic ? 'italic' : 'normal']};
    font-size: ${theme.typography.size[size]};
  `};
`;