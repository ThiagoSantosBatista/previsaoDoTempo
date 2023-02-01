import styled from "styled-components";

export const CardCidade = styled.section`
  grid-area: cidade;
  display: grid;
  place-items: center;
  padding: 4rem;
  border-radius: 3rem;
  border: 0.1rem solid #ffffff;
  background: rgba(1, 0, 17, 0.4);
  backdrop-filter: blur(2rem);
  text-align: center;

  h1 {
    color: rgba(255, 255, 255, 0.9);
    font-size: 5.6rem;
    font-weight: 600;
  }
`;
