import React from "react";
import SearchBar from "../SearchBar";
import * as S from "./styles";

const Main = () => {
  return (
    <S.Main>
      <SearchBar />
      <S.CardsSection>
        <S.CardTempo>
          <p>Tempo em Jundiaí:</p>
          <h1>Chuva Fraca</h1>
        </S.CardTempo>
        <S.CardDados>

        </S.CardDados>
        <article>

        </article>
      </S.CardsSection>
    </S.Main>
  );
};

export default Main;
