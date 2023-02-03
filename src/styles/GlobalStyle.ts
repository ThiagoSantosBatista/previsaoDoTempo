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
    color: #ffffff;
    background: linear-gradient(to right bottom, #070707, #212121);
    font-size: 1.6rem;
    max-width: 144rem;
    margin: 0 auto;
    padding: 0 5%;

  }
  img{
      display: block;
      max-width: 100%;
  }
  a, li, button{
    color: inherit;
    list-style: none;
    text-decoration: none;
    font-weight: inherit;
    font-size: inherit;
  }
`;

export default GlobalStyle;
