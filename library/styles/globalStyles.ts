import { createGlobalStyle } from "styled-components";

const GlobalSyles = createGlobalStyle`
    body{
        background-color: ${(props) => props.theme.colors.white};
        color: ${(props) => props.theme.colors.black};
        box-sizing: border-box;
        font-family: ${(props) => props.theme.fonts.body};
        margin: 0;

    }
    
    h1,h2,h3,h4,h5,h6{
        font-family: ${(props) => props.theme.fonts.heading};
        font-size: 5rem;
    }

`;
export default GlobalSyles;
