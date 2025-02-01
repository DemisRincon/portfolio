"use client";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body  {
        font-family: ${({ theme }) => theme.fonts.body};
        letter-spacing: 2px;
        margin: 0;
        padding: 0;
        max-width: 100vw;
    }
    h1, h2, h3, h4, h5, h6 {
        font-family: ${({ theme }) => theme.fonts.heading};
        padding: 0;
        margin: 0;
        text-transform: uppercase;
        strong {
            color: transparent;
            text-shadow: 0 0 0 1px ${(props) => props.theme.colors.black};
            @supports (-webkit-text-stroke: 1px ${(props) =>
              props.theme.colors.black}) {
                -webkit-text-fill-color: transparent;
                -webkit-text-stroke: 1px ${(props) => props.theme.colors.black};
            }
        }
    }
`;
export default GlobalStyles;
