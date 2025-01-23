"use client";
import { ThemeProvider } from "styled-components";
import StyledComponentsRegistry from "./styles/registry";
import defaultTheme from "./styles/defaultTheme";
import GlobalSyles from "./styles/globalStyles";

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={defaultTheme}>
        <GlobalSyles />
        {children}
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
};

export default Providers;
