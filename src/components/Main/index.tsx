import React from "react";
import CardCincoDias from "../CardCincoDias";
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
        <CardCincoDias />
      </S.CardsSection>
    </S.Main>
  );
};

export default Main;
