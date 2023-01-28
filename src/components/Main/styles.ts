import styled from "styled-components";

export const Main = styled.main`
  max-width: 144rem;
  margin: 0 auto;
  padding: 4.2rem 16.8rem;
`;

export const CardsSection = styled.section`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  grid-template-rows: auto auto;
  grid-template-areas:
    "tempo     dados"
    "cincoDias cincoDias";
  gap: 2.4rem;
  margin-top: 10rem;
`;


