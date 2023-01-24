import { createGlobalStyle } from "styled-components";
import Background from "../assets/background.jpg";

const GlobalStyle = createGlobalStyle`
  *, *::after, *::before{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-weight: 400;
  }
  html{
    font-size: 62.5%;
  }
  body{
    min-height: 100vh;
    background-image: linear-gradient(to right , #4776E6, #884CE5);
    font-size: 1.6rem;
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
