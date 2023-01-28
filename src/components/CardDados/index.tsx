import React from "react";
import ChuvaImg from "../../assets/imgs/chuva.png";
import { ReactComponent as LocalizationSvg } from "../../assets/svgs/location.svg";
import { ReactComponent as HumiditySvg } from "../../assets/svgs/humidity.svg";
import { ReactComponent as AirSvg } from "../../assets/svgs/air.svg";
import * as S from "./styles";

const CardDados = () => {
  return (
    <S.CardDados>
      <S.LocationDiv>
        <LocalizationSvg />
        <p>nome da cidade</p>
      </S.LocationDiv>
      <S.TempoDiv>
        <img src={ChuvaImg} alt="" />
        <h2>19ºC</h2>
      </S.TempoDiv>
      <S.DadosDiv>
        <S.DadosItem>
          <HumiditySvg />
          <p>umidade: 33%</p>
        </S.DadosItem>
        <S.DadosItem>
          <AirSvg />
          <p>vento: 14 km/h</p>
        </S.DadosItem>
      </S.DadosDiv>
    </S.CardDados>
  );
};

export default CardDados;
