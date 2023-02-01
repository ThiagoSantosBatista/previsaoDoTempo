import React from "react";
import * as S from "./styles";
import { WeatherProps } from "../../types/weather";

const CardCidade = ({name}: WeatherProps) => {
  return (
    <S.CardCidade>
      <header>
        <h1>{name}</h1>
      </header>
    </S.CardCidade>
  );
};

export default CardCidade;
