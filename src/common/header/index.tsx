import { useEffect, useRef } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Logo, ShoppingCart } from "@/assets/svg";

import { Typography } from "../typography";
import { Container, Nav } from "./styles";
import theme from "@/styles/theme";

export const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const params = usePathname();

  if (params === '/success') return;

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;

      if (scroll >= 531) {
        headerRef.current!.style.backgroundColor = theme.colors.background;
        headerRef.current!.style.boxShadow = theme.settings.boxShadow;
      } else {
        headerRef.current!.style.backgroundColor = 'transparent'
        headerRef.current!.style.boxShadow = '';
      }
    };

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []);

  return (
    <Container ref={headerRef}>
      <Link href="/">
        <Logo width={30} height={30} stroke="#41B06E" strokeWidth={15} style={{ transform: 'rotate(60deg)', marginTop: -14 }} />
      </Link>

      <Nav>

        <Link href="/">
          <Typography
            // italic
            size="light"
            weight={params === '/' ? "700" : "500"}
            color={params === '/' ? "primary" : "dark_gray_700"}
          >
            Inicio
          </Typography>
        </Link>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

        <Link href="/tracking">
          <Typography
            // italic
            size="light"
            weight={params === '/tracking' ? "700" : "500"}
            color={params === '/tracking' ? "primary" : "dark_gray_700"}
          >
            Rastreamento
          </Typography>
        </Link>

      </Nav>

      <Link href="/purchase">
        <ShoppingCart width={25} height={25} stroke="#41B06E" strokeWidth={1.5} />
      </Link>
    </Container>
  )
};