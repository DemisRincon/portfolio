"use client";
import { AnimatePresence, motion, useAnimation } from "motion/react";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { useRouter } from "next/navigation";

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
const FloatingMenuContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
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

interface FloatingMenuProps {
  onClose: () => void;
  menuOpen: boolean;
}

const FloatingMenu: React.FC<FloatingMenuProps> = ({ onClose }) => {
  const pathname = usePathname();
  const controls = useAnimation();
  const router = useRouter();
  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  const handleClose = (href?: string) => {
    controls.start("hidden").then(async () => {
      if (href) {
        router.prefetch(href);
        onClose();
        await router.push(href);
      }
    });
  };

  return (
    <FloatingMenuContainer
      as={motion.div}
      initial={{ opacity: 0, width: 0, display: "none" }}
      animate={controls}
      variants={{
        visible: {
          opacity: 1,
          width: "100%",
          display: "flex",
          transition: { duration: 0.2 },
        },
        hidden: {
          opacity: 0,
          width: 0,
          display: "none",
          transition: { duration: 0.2 },
        },
      }}
    >
      <CloseIcon onClick={() => handleClose()}>
        <FaTimes size={24} />
      </CloseIcon>
      <FloatingNavList>
        <AnimatePresence>
          {links.map((link, index) => (
            <NavItem
              $isActive={pathname === link.href}
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
              onClick={() => handleClose(link.href)}
            >
              {link.label}
            </NavItem>
          ))}
        </AnimatePresence>
      </FloatingNavList>
    </FloatingMenuContainer>
  );
};

export default FloatingMenu;
