"use client";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body  {
        font-family: ${({ theme }) => theme.fonts.body};
        letter-spacing: 2px;
        margin: 0;
        padding: 0;
    }
    h1, h2, h3, h4, h5, h6 {
        font-family: ${({ theme }) => theme.fonts.heading};
        padding: 0;
        margin: 0;
    }
`;
export default GlobalStyles;
