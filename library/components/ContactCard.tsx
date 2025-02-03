import React from "react";
import styled from "styled-components";
import { PageContainer } from "./Common";
import Link from "next/link";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  width: 95%;
  height: 100%;
  gap: 3rem;
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.black};
  text-decoration: none;
  font-size: 1.5rem;
  margin-top: 1rem;
`;

const ContactCard = () => {
  return (
    <PageContainer>
      <Container>
        <h2>Contact</h2>
        <StyledLink href="https://www.linkedin.com/in/demisrincon/">
          <h3>Linkedin: Demis Rincon</h3>
        </StyledLink>
        <StyledLink href="tel:+3121091992">
          <h3>Phone: 312 109 19 92</h3>
        </StyledLink>
        <StyledLink href="mailto:darmfma@gmail.com">
          <h3>Email: darmfma@gmail.com</h3>
        </StyledLink>
        <StyledLink href="https://github.com/DemisRincon">
          <h3>Github: DemisRincon</h3>
        </StyledLink>
      </Container>
    </PageContainer>
  );
};

export default ContactCard;
