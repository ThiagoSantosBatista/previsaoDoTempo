import React from "react";
import SearchBar from "../SearchBar";
import CardCidade from "../CardCidade";
import CardCincoDias from "../CardCincoDias";
import CardDados from "../CardDados";
import * as S from "./styles";

const Main = () => {
  return (
    <S.Main>
      <SearchBar />
      <CardCidade />
      <CardDados />
      <CardCincoDias />
    </S.Main>
  );
};

export default Main;
