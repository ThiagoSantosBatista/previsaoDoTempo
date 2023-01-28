import React from "react";
import SolImg from "../../assets/imgs/sol.png";
import NubladoImg from "../../assets/imgs/nublado.png";
import ChuvaRaiosImg from "../../assets/imgs/chuvaRaios.png";
import * as S from "./styles";
import CardDia from "./CardDia";

const diasList = [
  {
    dia: "21/04",
    src: `${SolImg}`,
    tempo: 'Sol',
    min: "min: 20ºC",
    max: "max: 30ºC",
  },
  {
    dia: "22/04",
    src: `${NubladoImg}`,
    tempo: 'Nublado',
    min: "min: 20ºC",
    max: "max: 30ºC",
  },
  {
    dia: "23/04",
    src: `${ChuvaRaiosImg}`,
    tempo: 'Chuva com raios',
    min: "min: 20ºC",
    max: "max: 30ºC",
  },
  {
    dia: "24/04",
    src: `${SolImg}`,
    tempo: 'Sol',
    min: "min: 20ºC",
    max: "max: 30ºC",
  },
  {
    dia: "25/04",
    src: `${NubladoImg}`,
    tempo: 'Nublado',
    min: "min: 20ºC",
    max: "max: 30ºC",
  },
];

const CardCincoDias = () => {
  return (
    <S.CardCincoDias>
      <h3>Previsão para os próximos 5 dias</h3>
      <S.CardList>
        {diasList.map(({dia, src, tempo, min, max}) => <CardDia dia={dia} src={src} tempo={tempo} min={min} max={max} />)}
      </S.CardList>
    </S.CardCincoDias>
  );
};

export default CardCincoDias;
