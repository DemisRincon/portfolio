"use client";
import { Bebas_Neue, Poppins } from "next/font/google";

const bebasNeue = Bebas_Neue({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: "normal",
  subsets: ["latin"],
});

const colors = {
  white: "#F2EFE7",
  black: "#333333",
  light: "#F2F2F2",
  lightGreen: "#9ACBD0",
  teal: "#48A6A7",
  blue: "#2973B2",
  grey: "#666",
};

const fonts = {
  heading: bebasNeue.style.fontFamily,
  body: poppins.style.fontFamily,
};

const fontSizes = {
  h1: "4rem",
  h2: "3rem",
  h3: "2rem",
  h4: "1.5rem",
  h5: "1.25rem",
  h6: "1rem",
  body: "1rem",
};
const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
};

const defaultTheme = {
  colors,
  fonts,
  breakpoints,
  fontSizes,
};

export default defaultTheme;
