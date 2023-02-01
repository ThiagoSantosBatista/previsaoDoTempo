import React from "react";
import SolSvg from "../../assets/svgs/sol.svg";
import NubladoSvg from "../../assets/svgs/nublado.svg";
import ChuvaRaiosSvg from "../../assets/svgs/chuvaRaios.svg";
import CardDia from "./CardDia";
import { WeatherProps } from "../../types/weather";
import * as S from "./styles";

const diasList = [
  {
    id: 1,
    dia: "21/04",
    src: `${SolSvg}`,
    tempo: "Sol",
    min: "min: 20ºC",
    max: "max: 30ºC",
  },
  {
    id: 2,
    dia: "22/04",
    src: `${NubladoSvg}`,
    tempo: "Nublado",
    min: "min: 20ºC",
    max: "max: 30ºC",
  },
  {
    id: 3,
    dia: "23/04",
    src: `${ChuvaRaiosSvg}`,
    tempo: "Chuva com raios",
    min: "min: 20ºC",
    max: "max: 30ºC",
  },
  {
    id: 4,
    dia: "24/04",
    src: `${SolSvg}`,
    tempo: "Sol",
    min: "min: 20ºC",
    max: "max: 30ºC",
  },
  {
    id: 5,
    dia: "25/04",
    src: `${NubladoSvg}`,
    tempo: "Nublado",
    min: "min: 20ºC",
    max: "max: 30ºC",
  },
];

const CardCincoDias = () => {
  return (
    <S.CardCincoDias>
      <header>
        <h2>Previsão para os próximos 5 dias</h2>
      </header>
      <S.CardList>
        {diasList.map(({ id, dia, src, tempo, min, max }) => (
          <CardDia
            key={id}
            dia={dia}
            src={src}
            tempo={tempo}
            min={min}
            max={max}
          />
        ))}
      </S.CardList>
    </S.CardCincoDias>
  );
};

export default CardCincoDias;
