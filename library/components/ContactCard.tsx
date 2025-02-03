import React from "react";
import styled from "styled-components";
import { Button, PageContainer } from "./Common";
import Link from "next/link";
import IconProvider from "./IconWall/IconProvider";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  width: 95%;
  height: 100%;
  gap: 3rem;
  margin-top: 3rem;
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.black};
  text-decoration: none;
  font-size: 1.5rem;
  margin-top: 1rem;
`;

const StyledButton = styled(Button)`
  margin-top: 2rem;
`;

const ContactCard = () => {
  return (
    <PageContainer>
      <h2>Contact</h2>
      <StyledButton
        onClick={() => {
          window.open("/resume.pdf", "_blank");
        }}
      >
        Resume
      </StyledButton>

      <Container>
        <StyledLink href="https://www.linkedin.com/in/demisrincon/">
          <h4>Linkedin: /demisrincon</h4>
        </StyledLink>
        <StyledLink href="tel:+3121091992">
          <h4>Phone: 312 109 19 92</h4>
        </StyledLink>
        <StyledLink href="mailto:darmfma@gmail.com">
          <h4>Email: darmfma@gmail.com</h4>
        </StyledLink>
        <StyledLink href="https://github.com/DemisRincon">
          <h4>Github: /DemisRincon</h4>
        </StyledLink>
      </Container>
    </PageContainer>
  );
};

export default ContactCard;
