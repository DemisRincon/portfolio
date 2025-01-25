"use client";
import { ThemeProvider } from "styled-components";
import StyledComponentsRegistry from "./styles/registry";
import defaultTheme from "./styles/defaultTheme";
import GlobalSyles from "./styles/globalStyles";
import React from "react";

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={defaultTheme}>
        <GlobalSyles />
        {children}
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
};

export default React.memo(Providers);
