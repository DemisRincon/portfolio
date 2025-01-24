import withClientValidation from "@/library/hoc/ClientComponent";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #f8f9fa;
  padding: 20px 0;
  text-align: center;
`;

const Footer = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return <> {isClient && <FooterContainer>hello</FooterContainer>} </>;
};
export default withClientValidation(Footer);
// "use client";

// import styled from "styled-components";

// const FooterWrapper = styled.div`
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 0 20px;
// `;

// const FooterNavList = styled.ul`
//   list-style: none;
//   padding: 0;
//   display: flex;
//   justify-content: center;
//   margin: 20px 0 0;
// `;

// const FooterNavItem = styled.li`
//   margin: 0 15px;
// `;

// const FooterLink = styled.a`
//   color: #007bff;
//   text-decoration: none;

//   &:hover {
//     text-decoration: underline;
//   }
// `;

// const Footer: React.FC = () => {
//   return <FooterContainer>hello</FooterContainer>;
// };

// export default Footer;
