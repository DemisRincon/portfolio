"use client";
import { ReactNode, FC } from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import withClientValidation from "@/library/hoc/ClientComponent";

interface MainLayoutProps {
  children?: ReactNode;
}

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
`;

const MainLayout: FC<MainLayoutProps> = ({ children }) => (
  <LayoutContainer>
    <Header />
    <MainContent>{children}</MainContent>
    <Footer />
  </LayoutContainer>
);

export default withClientValidation(MainLayout);
