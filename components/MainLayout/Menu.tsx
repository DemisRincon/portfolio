"use client";
import { motion, AnimatePresence } from "motion/react";
import useIsMobile from "@/library/hooks/useIsMobile";
import { useState, FC } from "react";
import { FaBars } from "react-icons/fa";
import styled from "styled-components";
import withClientValidation from "@/library/hoc/ClientComponent";
import FloatingMenu from "./FloatingMenu";

const Container = styled.div`
  position: fixed;
  display: flex;
  padding: 1rem;
  z-index: 1000;
  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    display: none;
  }
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-around;
`;

const NavItem = styled(motion.li)<{ $isActive?: boolean }>`
  margin: 0.5rem 0;
  text-decoration: none;
  font-weight: bold;
  color: ${(props) => props.theme.colors.white};
  font-size: 1.5rem;
  &:hover {
    color: #0070f3;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    margin: 0 1rem;
  }
`;

const NavLink = styled(motion.a)<{ $isActive?: boolean }>`
  text-decoration: none;
  font-weight: bold;
  color: ${(props) => props.theme.colors.white};
  font-size: 1.5rem;

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    font-size: 1rem;
    color: ${(props) => props.theme.colors.black};
    ${(props) =>
      props.$isActive &&
      `
      color: ${props.theme.colors.teal};
      font-size: 1.2rem;
    `}
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
  }
`;

const MenuIcon = styled.div`
  display: none;
  cursor: pointer;
  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    display: block;
  }
`;

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const Menu: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <>
        <MenuIcon onClick={toggleMenu}>
          <FaBars size={25} />
        </MenuIcon>
        <AnimatePresence>
          {menuOpen && <FloatingMenu onClose={toggleMenu} />}
        </AnimatePresence>
      </>
    );
  }

  return (
    <Container>
      <NavList>
        {links.map((link) => (
          <NavItem
            key={link.href}
            whileHover={{
              scale: 1.1,
              y: -5,
              transition: { duration: 0.2 },
            }}
          >
            <NavLink href={link.href}>{link.label}</NavLink>
          </NavItem>
        ))}
      </NavList>
    </Container>
  );
};

export default withClientValidation(Menu);
