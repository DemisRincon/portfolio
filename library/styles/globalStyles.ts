import { createGlobalStyle } from "styled-components";

const GlobalSyles = createGlobalStyle`
    h1{
        font-family: ${(props) => props.theme.fonts.heading};
        color: blue;
        font-size: 5rem;
    }
`;
export default GlobalSyles;
