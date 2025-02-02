"use client";
import { PageContainerAdjusted } from "@/library/components/Common";
import styled from "styled-components";

const FooterContainer = styled.div`
  padding: 3rem;
  display: grid;
  justify-content: center;
  align-items: start;
  grid-gap: 1rem;
  width: 100vw;
  grid-template-columns: repeat(1, 1fr);
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 90%;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
    max-width: 100%;
  }
`;

const Container = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
`;

const Footer = () => {
  return (
    <PageContainerAdjusted $bgColor="black">
      <FooterContainer>
        <Container>
          <h6>Created by: </h6>
          <p>Demis Rincon</p>
          <p>© 2025 Open source code</p>
        </Container>
        <Container>
          <h6>Contact</h6>
          <p>Hire me</p>
          <p>About me</p>
        </Container>
        <Container>
          <h6>Projects</h6>
          <p>Smart Point Cloud</p>
          <p>COOP</p>
          <p>PMG</p>
          <p>Xennial Digital</p>
          <p>Celebrity Crusies</p>
          <p>POS Kiosko</p>
        </Container>
      </FooterContainer>
    </PageContainerAdjusted>
  );
};
export default Footer;
