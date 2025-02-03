"use client";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html {
        box-sizing:border-box;
        position: relative; 
    }
    body  {
        font-family: ${({ theme }) => theme.fonts.body};
        letter-spacing: 2px;
        margin: 0;
        padding: 0;
        max-width: 100vw;
    }
    div{
        outline: none;
        //box-sizing: border-box;
        margin: 0;
        padding: 0;
        line-height: 1;
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
    h1{
            font-size: ${({ theme }) => theme.fontSizes.h1.fontSize};
           
    }
    h2{
            font-size: ${({ theme }) => theme.fontSizes.h2.fontSize};
    }
    h3{
            font-size: ${({ theme }) => theme.fontSizes.h3.fontSize};
    }
    h4{
            font-size: ${({ theme }) => theme.fontSizes.h4.fontSize};
    }
    h5{
            font-size: ${({ theme }) => theme.fontSizes.h5.fontSize};
    }
    h6{
            font-size: ${({ theme }) => theme.fontSizes.h6.fontSize};
    }
    button{
        font-size: ${({ theme }) => theme.fontSizes.button};
        font-family: ${({ theme }) => theme.fonts.heading};
        letter-spacing: 0.2rem;
        padding: 1rem 2rem;
        border-radius: 10px;
        font-weight: 600;
    }
    p{
        font-size: ${({ theme }) => theme.fontSizes.pharagraph.fontSize};
        line-height: ${({ theme }) => theme.fontSizes.pharagraph.lineHeight};
    }
`;
export default GlobalStyles;
