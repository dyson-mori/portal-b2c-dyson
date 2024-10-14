import type { Metadata } from "next";

import Screen from "./screen";

export const metadata: Metadata = {
  title: "Mori | Painel",
  description: "Controle de estoque",
};

export default function Panel() {
  return <Screen />
};