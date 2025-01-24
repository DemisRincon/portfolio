"use client";
import React, { ReactNode, Suspense } from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import Loading from "@/app/loading";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <LayoutContainer>
      <Suspense fallback={<Loading />}>
        <Header />
        <MainContent>{children}</MainContent>
        <Footer />
      </Suspense>
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
`;

export default MainLayout;
