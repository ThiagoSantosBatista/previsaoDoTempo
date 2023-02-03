import styled from "styled-components";

export const Main = styled.main`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "search    cidade"
    "search    dados";
  gap: 1.6rem;
  margin: 6.4rem 0;

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

  @media screen and (max-width: 950px) {
    grid-template-columns: auto;
    grid-template-rows: repeat(3, auto);
    grid-template-areas:
      "search"
      "cidade"
      "dados ";
  }
`;
