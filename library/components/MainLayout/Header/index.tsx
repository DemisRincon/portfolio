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
const Header = () => {
  const isMobile = useIsMobile();
  return (
    <MainContainer>
      <InnerContainer>
        <Heading>{headerData.name}</Heading>
        {isMobile ? <MobileNavigator /> : <DesktopNavigator />}
      </InnerContainer>
    </MainContainer>
  );
};

export default Header;
