"use client";

import { createGlobalStyle } from "styled-components";

interface Breakpoints {
  phone: string;
  tablet: string;
  desktop: string;
}

interface Colors {
  light: string;
  dark: string;
  snow: string;
  lightGreen: string;
  lightBlue: string;
}

export const breakpoints: Breakpoints = {
  phone: "480px",
  tablet: "768px",
  desktop: "1024px",
};

export const colors: Colors = {
  light: "#f8f9fa",
  dark: "#093a3e",
  snow: "#f7f0f0",
  lightGreen: "#18a999",
  lightBlue: "#3aafb9",
};

const GlobalStyles = createGlobalStyle`
    body, html, #__next {
    font-family: var(--font-geist-sans);
    font-size: 1rem;
    line-height: 1.5;
    color: var(--geist-foreground);
    background-color: var(--geist-background);
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: color 0.2s ease, background-color 0.2s ease;
    }
`;

export default GlobalStyles;
