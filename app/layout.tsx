import GlobalStyles from "@/library/GlobalStyles";
import StyledComponentsRegistry from "@/library/registry";
import { Metadata } from "next";
import { MainLayout } from "@/components/styled";
import Header from "./header";

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
        <GlobalStyles />
        <StyledComponentsRegistry>
          <MainLayout>
            <Header></Header>
            {children}
          </MainLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
