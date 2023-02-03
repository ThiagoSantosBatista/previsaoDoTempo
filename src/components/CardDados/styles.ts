import styled from "styled-components";

export const CardDados = styled.section`
  grid-area: dados;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 3.2rem;
  border-radius: 3rem;
  border: 0.1rem solid rgba(255, 255, 255, 0.7);
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0)
  );
  backdrop-filter: blur(2rem);

  @media screen and (max-width: 400px) {
    padding: 3.2rem 2.4rem;
  }
`;

export const TempoHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4rem;

  img {
    width: 10rem;
    height: 100%;
  }

  @media screen and (max-width: 768px) {
    img {
      width: 8rem;
    }
  }
`;

export const TempoContent = styled.div`
  p:first-child {
    margin-bottom: 1rem;
    font-size: clamp(3.6rem, 2.925rem + 1.875vw, 4.8rem);
    font-weight: 600;
  }
  p {
    color: rgba(255, 255, 255, 0.85);
    font-size: clamp(1.8rem, 1.6875rem + 0.3125vw, 2rem);
    font-weight: 500;
    &::first-letter {
      text-transform: uppercase;
    }
  }
`;

export const DadosUl = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 10rem;

  @media screen and (max-width: 768px) {
    gap: 5rem;
  }
  @media screen and (max-width: 440px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const DadosItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  p {
    color: rgba(255, 255, 255, 0.85);
    font-size: 1.6rem;
    font-weight: 500;
  }
`;
