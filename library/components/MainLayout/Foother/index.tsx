"use client";
import { PageContainerAdjusted } from "@/library/components/Common";
import styled from "styled-components";
import React from "react";
import Link from "next/link";

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

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
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
          <StyledLink href="/hireme">
            <p>Hire me</p>
          </StyledLink>

          <StyledLink href="tel:+3121091992">
            <p>312 109 19 92</p>
          </StyledLink>
          <StyledLink href="mailto:darmfma@gmail.com">
            <p>darmfma@gmail.com</p>
          </StyledLink>
          <StyledLink href="https://www.linkedin.com/in/demisrincon/">
            <p>Linkedin</p>
          </StyledLink>
          <StyledLink href="https://github.com/DemisRincon">
            <p>Github</p>
          </StyledLink>
        </Container>
        <Container>
          <h6>Projects</h6>
          <StyledLink href="/projects/#travleport">
            <p>Smart Point Cloud</p>
          </StyledLink>
          <StyledLink href="/projects/#sancrisoft">
            <p>PMG</p>
          </StyledLink>
          <StyledLink href="/projects/#kiosko">
            <p>POS Kiosko</p>
          </StyledLink>
          <StyledLink href="/projects/#tcs">
            <p>H hotels</p>
          </StyledLink>
        </Container>
      </FooterContainer>
    </PageContainerAdjusted>
  );
};

Footer.displayName = "Footer";

export default React.memo(Footer);
