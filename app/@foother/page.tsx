"use client";
import { PageFreeSpace } from "@/library/components/common";
import styled from "styled-components";

const FooterContainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: start;

  grid-gap: 1rem;
  width: 100%;
  grid-template-columns: repeat(1, 1fr);
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 90%;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
`;

const Footer = () => {
  return (
    <PageFreeSpace $bgColor="black">
      <FooterContainer>
        <Container>
          <h5>Created by: </h5>
          <p>Demis Rincon</p>
          <p>© 2025 Open source code</p>
        </Container>
        <Container>
          <h5>Contact</h5>
          <p>Hire me</p>
          <p>About me</p>
        </Container>
        <Container>
          <h5>Projects</h5>
          <p>Smart Point Cloud</p>
          <p>COOP</p>
          <p>PMG</p>
          <p>Xennial Digital</p>
          <p>Celebrity Crusies</p>
          <p>POS Kiosko</p>
        </Container>
      </FooterContainer>
    </PageFreeSpace>
  );
};
export default Footer;
