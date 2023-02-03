import styled from "styled-components";

export const CardCidade = styled.section`
  position: relative;
  grid-area: cidade;
  display: grid;
  place-items: center;
  padding: 3.2rem;
  max-width: 46.2rem;
  border-radius: 3rem;
  border: 0.1rem solid rgba(255, 255, 255, 0.7);
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0)
  );
  backdrop-filter: blur(2rem);
  text-align: center;
  
  h1 {
    color: rgba(255, 255, 255, 0.9);
    font-size: 4.8rem;
    font-weight: 600;
    word-break: break-word;
  }

  @media screen and (max-width: 950px) {
    padding: 4rem 3.2rem;
  }
`;
