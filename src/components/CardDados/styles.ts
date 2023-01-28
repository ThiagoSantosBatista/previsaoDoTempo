import styled from "styled-components";

export const CardDados = styled.article`
  grid-area: dados;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3.2rem;
  border-radius: 3rem;
  border: 0.1rem solid #ffffff;
  background: rgba(1, 0, 17, 0.4);
  backdrop-filter: blur(2rem);
`;

export const LocationDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 1.6rem;
`;

export const TempoDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 3.2rem;
  margin-bottom: 4rem;

  h2 {
    font-size: 6.4rem;
    font-weight: 600;
  }
`;

export const DadosDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.8rem;
`;

export const DadosItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  p {
    color: rgba(255, 255, 255, 0.85);
    font-size: 1.8rem;
    font-weight: 500;
  }
`;
