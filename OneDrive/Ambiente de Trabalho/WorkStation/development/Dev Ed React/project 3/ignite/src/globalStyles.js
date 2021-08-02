//styles
// import styled from "styled-components";
import {createGlobalStyle} from "styled-components";



const GlobalStyles = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }


    html{

        &::-webkit-scrollbar{

            width: 0.5rem;
        }

        &::-webkit-scrollbar-thumb{

            background-color: darkgrey;
        }
    }

    body{
        width: 100%;
        font-family: 'Montserrat', sans-serif;
    }

`;

export default GlobalStyles;