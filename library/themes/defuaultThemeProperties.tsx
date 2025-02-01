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

const defuaultThemeProperties = {
  colors: {
    white: "#F2EFE7",
    black: "#333333",
    light: "#F2F2F2",
    lightGreen: "#9ACBD0",
    teal: "#48A6A7",
    blue: "#2973B2",
    grey: "#666",
  },
  fonts: {
    heading: bebasNeue.style.fontFamily,
    body: poppins.style.fontFamily,
  },
  breakpoints: {
    xs: "375px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },
};

export default defuaultThemeProperties;
