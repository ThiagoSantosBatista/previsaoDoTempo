import React, { useRef, useState } from "react";
import SearchBar from "../SearchBar";
import CardCidade from "../CardCidade";
import CardCincoDias from "../CardCincoDias";
import CardDados from "../CardDados";
import * as S from "./styles";
import { WeatherProps } from "../../types/weather";

const Main = () => {
  const [weatherData, setWeatherData] = useState<WeatherProps | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const main = useRef<HTMLElement | null>(null);

  function toggleMain(action: string){
    return action === 'remove' ? main.current?.classList.remove('erro') : main.current?.classList.add('erro');
  }

  async function getWeather(city: string) {
    setWeatherData(null);
    setError(false);
    setIsLoading(true);

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=pt_br&appid=48801d9f3fc6028a2c16f305f4418df1&units=metric`
    );
    const data = await response.json();

    const { weather, main, wind, name, cod } = data;
    const newWeather: WeatherProps = {
      weather,
      main,
      wind,
      name,
      cod,
    };

    setIsLoading(false);

    if (newWeather.cod === 200) {
      toggleMain('remove');
      main.current?.classList.remove('erro');
      setWeatherData(newWeather);
    } else {
      toggleMain('add');
    }
  }

  return (
    <S.Main ref={main}>
      <SearchBar weather={getWeather} />
      {isLoading && <p>Carregando...</p>}
      {error && <p>Cidade não encontrada</p>}
      {weatherData && <CardCidade {...weatherData} />}
      {weatherData && <CardDados {...weatherData} />}
      {weatherData && <CardCincoDias />}
    </S.Main>
  );
};

export default Main;
