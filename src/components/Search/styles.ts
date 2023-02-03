import styled from "styled-components";

export const Section = styled.section`
  grid-area: search;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  min-height: 35rem;
  padding: 3.2rem;
  border-radius: 3rem;
  border: 0.1rem solid rgba(255, 255, 255, 0.7);
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0)
  );
  backdrop-filter: blur(2rem);
  
  @media screen and (max-width: 768px) {
    min-height: 30rem;
  }
  @media screen and (max-width: 400px) {
    padding: 3.2rem 2.4rem;
  }
  `;

export const Article = styled.article`
  text-align: center;
  
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;
  }
  svg path{
    transition: fill 0.3s;
  }
  
  @media (hover: hover) {
    svg:hover path {
      fill: #ffff00;
    }
  } ;
  `;
