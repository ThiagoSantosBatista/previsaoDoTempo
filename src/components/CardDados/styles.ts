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
`;

export const TempoHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4rem;

  img {
    height: 10rem;
    width: 10rem;
  }
`;

export const TempoContent = styled.div`
  p:first-child {
    font-size: 4.8rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  p {
    color: rgba(255, 255, 255, 0.85);
    font-size: 2rem;
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

  @media screen and (max-width: 550px) {
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
