"use client"

import { Montserrat, Montserrat_Alternates, Poppins } from "next/font/google";
import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import theme from "@/styles/theme";
import { GlobalStyles } from "@/styles/global";
import { Header } from "@/common";

const queryClient = new QueryClient();

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <html lang="pt">
          <body className={`${montserrat.variable} ${montserrat_alternates.variable} ${poppins.variable}`}>
            <Header />
            {children}
          </body>
        </html>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

const montserrat_alternates = Montserrat_Alternates({
  subsets: ['latin'],
  variable: "--font-montserrat_alternates",
  weight: [ '100', '200', '300', '400', '500', '600', '700', '800', '900' ]
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: "--font-montserrat",
  weight: [ '100', '200', '300', '400', '500', '600', '700', '800', '900' ]
});

const poppins = Poppins({
  subsets: ['latin'],
  variable: "--font-poppins",
  weight: [ '100', '200', '300', '400', '500', '600', '700', '800', '900' ]
});