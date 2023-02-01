import React from "react";
import SolSvg from "../../assets/svgs/sol.svg";
import ChuvaSvg from "../../assets/svgs/chuva.svg";
import ChuvaRaiosSvg from "../../assets/svgs/chuvaRaios.svg";
import NubladoSvg from "../../assets/svgs/nublado.svg";
import NevoaSvg from "../../assets/svgs/nevoa.svg";
import NeveSvg from "../../assets/svgs/neve.svg";
import { ReactComponent as HumiditySvg } from "../../assets/svgs/humidity.svg";
import { ReactComponent as AirSvg } from "../../assets/svgs/air.svg";
import { WeatherProps } from "../../types/weather";
import * as S from "./styles";

const weatherImgs = {
  t01d: `${SolSvg}`,
  t01n: `${SolSvg}`,
  t02d: `${NubladoSvg}`,
  t02n: `${NubladoSvg}`,
  t03d: `${NubladoSvg}`,
  t03n: `${NubladoSvg}`,
  t04d: `${NubladoSvg}`,
  t04n: `${NubladoSvg}`,
  t09d: `${ChuvaSvg}`,
  t09n: `${ChuvaSvg}`,
  t10d: `${ChuvaSvg}`,
  t10n: `${ChuvaSvg}`,
  t11d: `${ChuvaRaiosSvg}`,
  t11n: `${ChuvaRaiosSvg}`,
  t13d: `${NeveSvg}`,
  t13n: `${NeveSvg}`,
  t50d: `${NevoaSvg}`,
  t50n: `${NevoaSvg}`,
};

const CardDados = ({ weather, main, wind }: WeatherProps) => {
  let weatherIcon = "t" + weather[0].icon;

  return (
    <S.CardDados>
      <S.TempoHeader>
        <S.TempoContent>
          <p>{Math.round(main.temp)}°C</p>
          <p>{weather[0].description}</p>
        </S.TempoContent>
        <img
          src={weatherImgs[weatherIcon as keyof typeof weatherImgs]}
          alt="imagem representando o clima atual"
        />
      </S.TempoHeader>
      <S.DadosUl>
        <S.DadosItem>
          <HumiditySvg />
          <p>umidade: {main.humidity}%</p>
        </S.DadosItem>
        <S.DadosItem>
          <AirSvg />
          <p>vento: {Math.round(wind.speed)} km/h</p>
        </S.DadosItem>
      </S.DadosUl>
    </S.CardDados>
  );
};

export default CardDados;
