import { AnimatePresence } from "motion/react";
import React, { useState, useCallback } from "react";
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
`;

/**
 * MobileNavigator component is responsible for rendering a menu icon and a floating menu.
 * It uses React hooks to manage the state of the menu (open/close) and AnimatePresence for animation.
 */
const MobileNavigator: React.FC = () => {
  // State to manage the visibility of the menu
  const [menuOpen, setMenuOpen] = useState(false);

  // Callback function to toggle the menu state
  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  return (
    <>
      {/* Menu icon button which triggers the toggleMenu function on click */}
      <MenuIcon onClick={toggleMenu}>
        <FaBars size={25} />
      </MenuIcon>
      {/* AnimatePresence component to handle the animation of the floating menu */}
      <AnimatePresence>
        {menuOpen && <FloatingMenu toggleMenu={toggleMenu} />}
      </AnimatePresence>
    </>
  );
};

export default MobileNavigator;
