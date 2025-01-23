import { createGlobalStyle } from "styled-components";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: "400", style: "normal" });
const GlobalSyles = createGlobalStyle`
    *{
        font-family: ${poppins};
    }
`;
export default GlobalSyles;
