"use client";

import React, { ReactNode } from "react";
import Header from "./Header";
import Foother from "./Foother";
import styled from "styled-components";

interface MainLayoutProps {
  children: ReactNode;
}

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  padding-top: 80px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <PageWrapper>{children}</PageWrapper>
      <Foother />
    </>
  );
};

export default MainLayout;
