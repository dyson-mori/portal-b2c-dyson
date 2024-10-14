"use client";

// import type { Metadata } from "next";
import { useTheme } from "styled-components"

import Mobile from "./screen/mobile";
import Web from "./screen/web";

// export const metadata: Metadata = {
//   title: "Mori | Seu Carrinho",
//   description: "Encontre seus produtos",
// };

export default function Purchase() {
  const theme = useTheme();

  return theme.dimension.window_size().isMobile ? <Mobile /> : <Web />
};