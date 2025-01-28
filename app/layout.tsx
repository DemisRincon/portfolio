import MainLayout from "@/components/MainLayout";
import Providers from "@/library/providers";
import type { Metadata } from "next";
import { ReactNode, Suspense } from "react";
import Loading from "./loading";

export const metadata: Metadata = {
  title: "Portfolio Demis Rincon",
  description: "Look at my portfolio",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <Suspense fallback={<Loading />}>
        <body>
          <Providers>
            <MainLayout>{children}</MainLayout>
          </Providers>
        </body>
      </Suspense>
    </html>
  );
}
