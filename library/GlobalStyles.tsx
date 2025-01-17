"use client";

import { createGlobalStyle } from "styled-components";

interface Breakpoints {
  phone: string;
  tablet: string;
  desktop: string;
}

export const breakpoints: Breakpoints = {
  phone: "480px",
  tablet: "768px",
  desktop: "1024px",
};

const GlobalStyles = createGlobalStyle`

`;

export default GlobalStyles;
