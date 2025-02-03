"use client";
import headerData from "@/library/data/header";
import useIsMobile from "@/library/hooks/useIsMobile";
import React from "react";
import styled from "styled-components";
import DesktopNavigator from "./desktopNavigator";
import MobileNavigator from "./mobileNavigator";

const MainContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const InnerContainer = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Heading = styled.h1`
  color: ${({ theme }) => theme.colors.black};
`;

/**
 * Header component that renders the main header layout.
 * This component is memoized using React.memo to prevent unnecessary re-renders.
 *
 * @component
 * @returns {JSX.Element} The rendered header component.
 *
 * @example
 * return (
 *   <Header />
 * )
 *
 * @remarks
 * This component uses the `useIsMobile` hook to determine if the device is mobile.
 * Depending on the result, it conditionally renders either the `MobileNavigator` or `DesktopNavigator` component.
 *
 * @see {@link useIsMobile} for the hook that determines if the device is mobile.
 * @see {@link MobileNavigator} for the mobile navigation component.
 * @see {@link DesktopNavigator} for the desktop navigation component.
 */
const Header: React.FC = React.memo(() => {
  const isMobile = useIsMobile();

  return (
    <MainContainer>
      <InnerContainer>
        <Heading>{headerData.name}</Heading>
        {isMobile ? <MobileNavigator /> : <DesktopNavigator />}
      </InnerContainer>
    </MainContainer>
  );
});

Header.displayName = "Header";

export default Header;
