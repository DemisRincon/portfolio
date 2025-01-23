import { ThemeProvider } from "styled-components";
import StyledComponentsRegistry from "./registry";
import defaultTheme from "./defaultTheme";
import GlobalSyles from "./globalStyles";

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={{ defaultTheme }}>
        <GlobalSyles />
        {children}
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
};

export default Providers;
