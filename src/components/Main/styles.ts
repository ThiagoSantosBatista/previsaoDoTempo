import styled from "styled-components";

export const Main = styled.main`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "search    cidade"
    "search    dados";
  gap: 1.6rem;
  max-width: 144rem;
  margin: 0 auto;
  padding: 6.4rem 5%;

  &.erro .error {
    display: block;
  }

  &.loading {
    .load {
      display: block;
    }
    .searchIcon {
      display: none;
    }
  }
`;
