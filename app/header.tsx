"use client";
import { breakpoints } from "@/library/GlobalStyles";
import Link from "next/link";
import styled from "styled-components";

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
  return (
    <Container>
      <TitleContainer>
        <Title>Demis Rincon</Title>
      </TitleContainer>
      <NavigatorContainer>
        <Link href="#home">Home</Link>
        <Link href="#about">About</Link>
        <Link href="#services">Services</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#contact">Contact</Link>
      </NavigatorContainer>
    </Container>
  );
};

export default Header;
