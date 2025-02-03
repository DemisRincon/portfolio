import headerData from "@/library/data/header";
import React, { useCallback } from "react";
import styled from "styled-components";
import Link from "next/link";
import { motion } from "framer-motion";

const Container = styled.nav`
  display: flex;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  height: 100%;
  text-transform: uppercase;
`;

const NavLink = styled(motion.div)<{ $isActive?: boolean }>`
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

/**
 * DesktopNavigator component renders a navigation bar for desktop view.
 * It uses a callback to render each navigation link with animation effects.
 *
 * @component
 * @returns {JSX.Element} The rendered navigation bar component.
 *
 * @example
 * // Example usage of DesktopNavigator
 * <DesktopNavigator />
 *
 * @remarks
 * This component uses `useCallback` to memoize the `renderLink` function,
 * which helps to avoid unnecessary re-renders. Each link is wrapped with
 * `NavLink` to provide hover animations and `Link` for navigation.
 *
 * @function
 * @name DesktopNavigator
 */
const DesktopNavigator = () => {
  const renderLink = useCallback(
    (link: { href: string; label: string }) => (
      <NavLink
        key={link.href?.toString()}
        whileHover={{
          scale: 1.1,
          y: -5,
          transition: { duration: 0.2 },
        }}
      >
        {typeof link.href === "string" && (
          <Link href={link.href} passHref prefetch={true}>
            <a style={{ textDecoration: "none", color: "inherit" }}>
              {link.label}
            </a>
          </Link>
        )}
      </NavLink>
    ),
    []
  );

  return <Container>{headerData.links.map(renderLink)}</Container>;
};

export default React.memo(DesktopNavigator);
