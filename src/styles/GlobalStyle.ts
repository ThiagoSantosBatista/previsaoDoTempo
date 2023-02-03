import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::after, *::before{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-weight: 400;
    font-family: 'Inter', sans-serif;
  }
  html{
    font-size: 62.5%;
  }
  body{
    display: grid;
    place-items: center;
    min-height: 100vh;
    margin: 0 auto;
    padding: 0 5%;
    max-width: 144rem;
    color: #ffffff;
    background: linear-gradient(to right bottom, #070707, #212121);
    font-size: 1.6rem;

  }
  img{
      display: block;
      max-width: 100%;
  }
  a, li, button{
    color: inherit;
    list-style: none;
    font-size: inherit;
    font-weight: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;
