import { createGlobalStyle } from "styled-components";
import Background from "../assets/svgs/background.svg";

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
    min-height: 100vh;
    color: #ffffff;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${Background});
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
