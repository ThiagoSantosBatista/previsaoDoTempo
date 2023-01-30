import styled from "styled-components";

export const Main = styled.main`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  grid-template-rows: auto auto auto;
  grid-template-areas:
    "search    search"
    "cidade    dados"
    "cincoDias cincoDias";
  gap: 2.6rem;
  max-width: 144rem;
  margin: 0 auto;
  padding: 7.2rem 16.8rem;
`;
