import { motion, AnimatePresence, useAnimation } from "framer-motion";
import useIsMobile from "@/library/hooks/useIsMobile";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  padding: 1rem;
  z-index: 1000;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-around;
`;

const NavItem = styled(motion.li)`
  margin: 0.5rem 0;
  text-decoration: none;
  font-weight: bold;
  color: ${(props) => props.theme.colors.white};
  font-size: 1.5rem;
  &:hover {
    color: #0070f3;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    color: ${(props) => props.theme.colors.black};
  }
`;

const NavLink = styled(motion.a)`
  text-decoration: none;
  font-weight: bold;
  color: ${(props) => props.theme.colors.white};
  font-size: 1.5rem;
  &:hover {
    color: #0070f3;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    color: ${(props) => props.theme.colors.black};
  }
`;

const MenuIcon = styled.div`
  display: none;
  cursor: pointer;
  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    display: block;
  }
`;

const FloatingMenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.teal};
  color: ${(props) => props.theme.colors.white};
`;

const CloseIcon = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
`;

const FloatingNavList = styled(NavList)`
  flex-direction: column;
  align-items: center;
`;

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const FloatingMenu = ({ onClose }: { onClose: () => void }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  const handleClose = (href?: string) => {
    controls
      .start("hidden")
      .then(onClose)
      .then(() => {
        if (href) {
          window.location.href = href;
        }
      });
  };

  const handleLinkClick = (href: string) => {
    handleClose(href);
  };

  return (
    <FloatingMenuContainer
      as={motion.div}
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: 0, transition: { duration: 0.3 } }}
      exit={{ opacity: 0, x: "100%", transition: { duration: 0.5 } }}
    >
      <CloseIcon onClick={() => handleClose()}>
        <FaTimes size={24} />
      </CloseIcon>
      <FloatingNavList>
        <AnimatePresence>
          {links.map((link, index) => (
            <NavItem
              key={link.href}
              initial={{ opacity: 0, y: "-20%", x: "100%" }}
              animate={controls}
              transition={{ delay: 0.3 + index * 0.1 }}
              variants={{
                visible: { opacity: 1, y: 0, x: 0 },
                hidden: {
                  opacity: 0,
                  y: "-20%",
                  x: "200%",
                  transition: { duration: 0.2 },
                },
              }}
              onClick={() => handleLinkClick(link.href)}
            >
              {link.label}
            </NavItem>
          ))}
        </AnimatePresence>
      </FloatingNavList>
    </FloatingMenuContainer>
  );
};

const Menu: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <>
        <MenuIcon onClick={toggleMenu}>
          <FaBars />
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
          <NavItem key={link.href}>
            <NavLink href={link.href}>{link.label}</NavLink>
          </NavItem>
        ))}
      </NavList>
    </Container>
  );
};

export default Menu;
