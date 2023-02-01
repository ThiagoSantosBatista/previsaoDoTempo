import styled from "styled-components";

export const CardDados = styled.section`
  grid-area: dados;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem 3.2rem;
  border-radius: 3rem;
  border: 0.1rem solid #ffffff;
  background: rgba(1, 0, 17, 0.4);
  backdrop-filter: blur(2rem);
`;

export const TempoHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4rem;

  img{
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
  gap: 0.8rem;
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
