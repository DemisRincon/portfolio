"use client";
import { ThemeProvider } from "styled-components";
import StyledComponentsRegistry from "./registry";
import useDetectDevice, { DeviceType } from "../hooks/useDeviceType";
import GlobalStyles from "./GlobalStyles";
import useSelectTheme from "../hooks/useSelectTheme";
import { useMemo } from "react";

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  const device = useDetectDevice();
  const selectedTheme = useSelectTheme(device || DeviceType.Mobile);
  const theme = useMemo(() => selectedTheme, [selectedTheme]);

  if (!device || !theme) return null;

  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
};

export default Providers;
