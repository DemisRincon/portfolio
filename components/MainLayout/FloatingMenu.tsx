"use client";
import React, { useEffect, useCallback } from "react";
import { AnimatePresence, motion, useAnimation } from "motion/react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { useRouter, usePathname } from "next/navigation";

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
  outline: 0;
  border: none;
  padding: 0.5rem;
  background-color: transparent;
  -webkit-tap-highlight-color: transparent;
`;

const FloatingNavList = styled(NavList)`
  flex-direction: column;
  align-items: center;
`;

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About Me" },
  { href: "/contact", label: "Hire me" },
];

interface FloatingMenuProps {
  onClose: () => void;
}

const FloatingMenu: React.FC<FloatingMenuProps> = ({ onClose }) => {
  const pathname = usePathname();
  const animationControls = useAnimation();
  const router = useRouter();

  useEffect(() => {
    animationControls.start("visible");
  }, [animationControls]);

  const handleClose = useCallback(
    (href?: string): void => {
      if (href) {
        router.push(href);
        window.scrollTo(0, 0);
        animationControls.start("hidden");
        onClose();
      } else {
        animationControls.start("hidden");
        onClose();
      }
    },
    [animationControls, onClose, router]
  );

  return (
    <FloatingMenuContainer
      as={motion.div}
      initial={{ opacity: 0, width: 0 }}
      animate={animationControls}
      variants={{
        visible: {
          opacity: 1,
          width: "100%",
          transition: { duration: 0.2 },
        },
        hidden: {
          opacity: 0,
          width: 0,
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
              animate={animationControls}
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

export default React.memo(FloatingMenu);
