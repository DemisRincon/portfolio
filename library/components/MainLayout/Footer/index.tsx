"use client";
import { PageContainerAdjusted } from "@/library/components/Common";
import styled from "styled-components";
import React from "react";

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

/**
 * Footer component that displays various sections including creator information, contact details, and projects.
 *
 * @component
 * @example
 * return (
 *   <Footer />
 * )
 *
 * @returns {JSX.Element} The rendered footer component.
 *
 * @remarks
 * This component uses styled-components for styling. It contains three main sections:
 * - Creator information
 * - Contact details
 * - List of projects
 *
 * @see {@link PageContainerAdjusted} for the container with background color adjustment.
 * @see {@link FooterContainer} for the main footer container styling.
 * @see {@link Container} for individual section styling within the footer.
 */
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

Footer.displayName = "Footer";

export default React.memo(Footer);
