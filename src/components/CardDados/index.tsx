import React from "react";
import { ReactComponent as ChuvaSvg } from "../../assets/svgs/chuva.svg";
import { ReactComponent as HumiditySvg } from "../../assets/svgs/humidity.svg";
import { ReactComponent as AirSvg } from "../../assets/svgs/air.svg";
import * as S from "./styles";

const CardDados = () => {
  return (
    <S.CardDados>
      <S.TempoHeader>
        <S.TempoContent>
          <p>19ºC</p>
          <p>Chuva com raios</p>
        </S.TempoContent>
        <ChuvaSvg />
      </S.TempoHeader>
      <S.DadosUl>
        <S.DadosItem>
          <HumiditySvg />
          <p>umidade: 33%</p>
        </S.DadosItem>
        <S.DadosItem>
          <AirSvg />
          <p>vento: 14 km/h</p>
        </S.DadosItem>
      </S.DadosUl>
    </S.CardDados>
  );
};

export default CardDados;
