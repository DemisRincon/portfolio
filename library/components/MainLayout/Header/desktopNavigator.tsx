import headerData from "@/library/data/header";
import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { motion } from "motion/react";

const Container = styled.nav`
  display: flex;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  height: 100%;
  text-transform: uppercase;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;
const NavLink = styled(motion.div)`
  text-decoration: none;
  font-weight: bold;

  color: ${(props) => props.theme.colors.black};

  &:after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background: ${(props) => props.theme.colors.teal};
    transition: width 0.3s;
  }
  &:hover:after {
    width: 100%;
  }
`;

const renderNavLink = (link: { href: string; label: string }) => (
  <NavLink
    key={link.href}
    whileHover={{
      scale: 1.1,
      y: -5,
      transition: { duration: 0.2 },
    }}
  >
    <Link
      href={link.href}
      prefetch={true}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      {link.label}
    </Link>
  </NavLink>
);

const DesktopNavigator = () => {
  return <Container>{headerData.links.map(renderNavLink)}</Container>;
};

export default DesktopNavigator;
