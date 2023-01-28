import styled from "styled-components";

export const CardTempo = styled.article`
  grid-area: tempo;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 6.4rem 0;
  border-radius: 3rem;
  border: 0.1rem solid #ffffff;
  background: rgba(1, 0, 17, 0.4);
  backdrop-filter: blur(2rem);

  p {
    margin-bottom: 3.2rem;
    color: rgba(255, 255, 255, 0.9);
    font-size: 3.2rem;
  }
  h1 {
    color: rgba(255, 255, 255, 0.9);
    font-size: 5.8rem;
    font-weight: 600;
  }
`;
