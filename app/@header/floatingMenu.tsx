import { AnimatePresence, motion, useAnimation } from "motion/react";
import React, { useCallback, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import styled from "styled-components";
import { usePathname, useRouter } from "next/navigation";
import headerData from "@/library/data/header";
import useLockScroll from "@/library/hooks/useLockScroll";

interface FloatingMenuProps {
  toggleMenu: () => void;
}

const FullScreenOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  display: flex;
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
  cursor: pointer;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
`;

const NavItem = styled(motion.li)<{ $isActive?: boolean }>`
  margin: 0.5rem 0;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.5rem;
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.grey};
  }
`;

const FloatingMenu: React.FC<FloatingMenuProps> = ({ toggleMenu }) => {
  const animationControls = useAnimation();
  const pathname = usePathname();
  const router = useRouter();
  useLockScroll();
  useEffect(() => {
    animationControls.start("visible");
  }, [animationControls]);

  const handleClose = useCallback(
    async (href?: string): Promise<void> => {
      await animationControls.start("hidden");
      if (href) {
        router.prefetch(href);
        router.push(href);
      }
      toggleMenu();
    },
    [animationControls, toggleMenu, router]
  );

  return (
    <FullScreenOverlay
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
      <NavList>
        {headerData.links.map((link, index) => (
          <AnimatePresence key={link.href}>
            <NavItem
              $isActive={pathname === link.href}
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
              <h1>{link.label}</h1>
            </NavItem>
          </AnimatePresence>
        ))}
      </NavList>
    </FullScreenOverlay>
  );
};

export default React.memo(FloatingMenu);
