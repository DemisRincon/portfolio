"use client";

import React, { ReactNode } from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Foother";

interface MainLayoutProps {
  children: ReactNode;
}

/**
 * A styled component that serves as a wrapper for the page content.
 *
 * This component is a `div` element styled using `styled-components`. It is designed
 * to display its children in a columnar flex layout, centered both horizontally and
 * vertically. The component takes up the full width of its container and ensures that
 * its minimum height is 100% of the viewport height. Additionally, it includes padding
 * at the top to accommodate any fixed headers and sets the background color based on
 * the current theme.
 *
 * @component
 * @example
 * return (
 *   <PageWrapper>
 *     <YourContent />
 *   </PageWrapper>
 * );
 *
 * @styled
 * @property {string} theme.colors.white - The background color of the component, derived from the theme.
 */
const PageWrapper = styled.div`
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
      <Footer />
    </>
  );
};

MainLayout.displayName = "MainLayout";

export default MainLayout;
