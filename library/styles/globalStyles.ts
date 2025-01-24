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
    }
 
    h1{
        font-size: 3rem;
        strong {
        color: transparent;
        text-shadow: 0 0 0 3px ${(props) => props.theme.colors.black};
        @supports (
            -webkit-text-stroke: 1px ${(props) => props.theme.colors.black}) {
            -webkit-text-fill-color: transparent;
            -webkit-text-stroke: 3px ${(props) => props.theme.colors.black};
            }
        }    
    }

    h2{
        font-size: 2rem;
    }
    h3{
        font-size: 1.5;
    }
    h4{
        font-size: 1.1rem;
    }
    h5{
        font-size: 1rem;
    }
    h6{
        font-size: .8rem;
    }

    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
        h1{
            font-size: 3.5;
        }
        h2{
            font-size: 2.5;
        }
        h3{
            font-size: 1.8;
        }
        h4{
            font-size: 1.2rem;
        }
        h5{
            font-size: 1.1rem;
        }
        h6{
            font-size: 1rem;
        }
    }

    @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
        h1{
            font-size: 4rem;
        }
        h2{
            font-size: 3rem;
        }
        h3{
            font-size: 2rem;
        }
        h4{
            font-size: 1.5rem;
        }
        h5{
            font-size: 1.25rem;
        }
        h6{
            font-size: 1rem;
        }
    }
    
    `;
export default GlobalSyles;
