import React from "react";
import CardDados from "../CardDados";
import CardTempo from "../CardTempo";
import SearchBar from "../SearchBar";
import * as S from "./styles";

const Main = () => {
  return (
    <S.Main>
      <SearchBar />
      <S.CardsSection>
        <CardTempo />
        <CardDados />
        <article>

        </article>
      </S.CardsSection>
    </S.Main>
  );
};

export default Main;
