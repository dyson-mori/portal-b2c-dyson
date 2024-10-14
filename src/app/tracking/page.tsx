import type { Metadata } from "next";

import Screen from "./screen";

export const metadata: Metadata = {
  title: "Mori | Rastreamento",
  description: "Encontre seus produtos",
};

export default function Page() {
  return <Screen />
};
