import { AnimatePresence } from "motion/react";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import styled from "styled-components";
import FloatingMenu from "./floatingMenu";

const MenuIcon = styled.button`
  outline: 0;
  border: none;
  padding: 0.5rem;
  background-color: transparent;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

const MobileNavigator = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <MenuIcon onClick={toggleMenu}>
        <FaBars size={25} />
      </MenuIcon>
      <AnimatePresence>
        {menuOpen && <FloatingMenu toggleMenu={toggleMenu} />}
      </AnimatePresence>
    </>
  );
};

export default MobileNavigator;
