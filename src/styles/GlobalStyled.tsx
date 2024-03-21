import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    a {
        cursor: pointer;
    }

    h1 {
        font-size: 48px;
        font-weight: 700;
    }

    h2 {
        font-weight: 600;
    }

    h3 {
        font-size: 18px;
        font-weight: 500;
    }

    ul {
        list-style: none;
    }

    button {
        background-color: unset;
        border: none;
        cursor: pointer;
    }

    body {
        background-color: #F0F0F6;
        font-family: 'Inter', sans-serif;

        min-width: 360px;
    }

    section {
        padding: 70px 0; 
    }
`