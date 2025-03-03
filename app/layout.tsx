import type { Metadata } from "next";
import Head from "next/head";
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
  keywords: [
    "Demis Rincon",
    "Portfolio",
    "Web Developer",
    "software developer",
    "full stack software developer",
    "software developer resume",
    "software developer portfolio",
    "software developer website",
    "software developer personal website",
    "software developer blog",
    "software developer personal blog",
    "software developer projects",
    "software developer skills",
    "software developer about me",
    "software developer contact",
    "software developer social media",
    "software developer github",
    "software developer linkedin",
    "Frontend Developer",
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "CSS",
    "HTML",
    "Web Development",
    "Programming",
    "Software Engineer",
    "UI/UX",
    "Tech",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${bebasNeue.variable} ${poppins.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
