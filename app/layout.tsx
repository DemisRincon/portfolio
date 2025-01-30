import MainLayout from "@/components/MainLayout";
import Providers from "@/library/providers";
import type { Metadata } from "next";
import { ReactNode } from "react";
import HeroSideImageHead from "./@HeroSideImageHead/page";

export const metadata: Metadata = {
  title: "Portfolio Demis Rincon",
  description: "Look at my portfolio",
};

const urlPage = "/";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body id="__next">
        <Providers>
          <MainLayout>
            <HeroSideImageHead pagePath={urlPage} order={1} />
            {/* {children} */}
          </MainLayout>
        </Providers>
      </body>
    </html>
  );
}
