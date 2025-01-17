import StyledComponentsRegistry from "@/library/registry";
import { Metadata } from "next";
import { MainLayout } from "@/components/styled";
import Header from "./header";
import GlobalThemeWrapper from "@/library/GlobalTheme";

export const metadata: Metadata = {
  title: "Demis Rincon Portfolio",
  description:
    "Demis Rincon Portfolio created with Next.js to showcase my work and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <GlobalThemeWrapper>
            <MainLayout>
              <Header />
              {children}
            </MainLayout>
          </GlobalThemeWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
