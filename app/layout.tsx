import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Bebas_Neue, Poppins } from "next/font/google";
const bebasNeue = Bebas_Neue({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
});

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: "normal",
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Demis Rincon",
  description: "Portfolio of Demis Rincon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${bebasNeue} ${poppins}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
