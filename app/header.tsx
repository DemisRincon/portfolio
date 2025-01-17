"use client";
import { breakpoints } from "@/library/GlobalStyles";
import Link from "next/link";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 200px;
`;

const Title = styled.h1`
  font-size: 1.5rem;
`;

const NavigatorContainer = styled.div`
  display: none;
  @media (min-width: ${breakpoints.desktop}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 400px;
  }
`;

const Header = () => {
  const navigationLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <Container>
      <TitleContainer>
        <Title>Demis Rincon</Title>
      </TitleContainer>
      <NavigatorContainer>
        {navigationLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </NavigatorContainer>
      <GiHamburgerMenu />
    </Container>
  );
};

export default Header;
