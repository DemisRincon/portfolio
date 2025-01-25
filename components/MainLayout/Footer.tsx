import withClientValidation from "@/library/hoc/ClientComponent";
import { useEffect, useState } from "react";
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

  return isClient ? <FooterContainer>hello</FooterContainer> : null;
};

export default withClientValidation(Footer);
