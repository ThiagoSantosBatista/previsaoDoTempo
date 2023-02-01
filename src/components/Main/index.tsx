import React, { useState } from "react";
import SearchBar from "../SearchBar";
import CardCidade from "../CardCidade";
import CardCincoDias from "../CardCincoDias";
import CardDados from "../CardDados";
import * as S from "./styles";
import { WeatherProps } from "../../types/weather";

const Main = () => {
  const [weatherData, setWeatherData] = useState<WeatherProps | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function getWeather(city: string) {
    setWeatherData(null);
    setIsLoading(true);
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=pt_br&appid=1145d958140d8e379c26b0d1f364c91c&units=metric`
    );
    const data = await response.json();

    const { weather, main, wind, name } = data;

    const newWeather: WeatherProps = {
      weather,
      main,
      wind,
      name,
    };

    setIsLoading(false);
    setWeatherData(newWeather);
  }

  return (
    <S.Main>
      <SearchBar weather={getWeather} />
      {isLoading && <p>Carregando...</p>}
      {weatherData && <CardCidade {...weatherData} />}
      {weatherData && <CardDados {...weatherData} />}
      {weatherData && <CardCincoDias />}
    </S.Main>
  );
};

export default Main;
