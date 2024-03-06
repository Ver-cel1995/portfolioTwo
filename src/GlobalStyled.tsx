import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    h1 {
        font-size: 48px;
    }

    body {
        background-color: #F0F0F6;
    }
`