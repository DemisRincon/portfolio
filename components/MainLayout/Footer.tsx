import Link from "next/link";
import React from "react";

import styled from "styled-components";

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <p>
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
        <nav>
          <FooterNavList>
            <FooterNavItem>
              <FooterLink href="/about" passHref>
                About
              </FooterLink>
            </FooterNavItem>
            <FooterNavItem>
              <FooterLink href="/contact" passHref>
                Contact
              </FooterLink>
            </FooterNavItem>
            <FooterNavItem>
              <FooterLink href="/privacy" passHref>
                Privacy Policy
              </FooterLink>
            </FooterNavItem>
          </FooterNavList>
        </nav>
      </FooterWrapper>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: #f8f9fa;
  padding: 20px 0;
  text-align: center;
`;

const FooterWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const FooterNavList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  margin: 20px 0 0;
`;

const FooterNavItem = styled.li`
  margin: 0 15px;
`;

const FooterLink = styled(Link)`
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default Footer;
