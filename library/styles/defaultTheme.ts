"use client";
import { Bebas_Neue, Poppins } from "next/font/google";

const bebasNeue = Bebas_Neue({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});
const poppins = Poppins({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

const defaultTheme = {
  colors: {
    white: "#F2EFE7",
    black: "#1A1A1A",
    light: "#F2F2F2",
    lightGreen: "#9ACBD0",
    teal: "#48A6A7",
    blue: "#2973B2",
  },
  fonts: {
    heading: bebasNeue.style.fontFamily,
    body: poppins.style.fontFamily,
  },
};
export default defaultTheme;