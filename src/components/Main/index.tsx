import { useRef, useState } from "react";
import CardCidade from "../CardCidade";
import CardDados from "../CardDados";
import * as S from "./styles";
import { WeatherProps } from "../../types/weather";
import Search from "../Search";

const Main = () => {
  const [weatherData, setWeatherData] = useState<WeatherProps | null>(null);
  const [error, setError] = useState(false);

  const main = useRef<HTMLElement | null>(null);

  function MainActions(action: string) {
    if (action === "removeErro") {
      return main.current?.classList.remove("erro");
    }
    if (action === "addErro") {
      return main.current?.classList.add("erro");
    }
    if (action === "removeLoading") {
      return main.current?.classList.remove("loading");
    }
    if (action === "addLoading") {
      return main.current?.classList.add("loading");
    }
  }

  async function getWeather(city: string) {
    setError(false);
    MainActions("addLoading");

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

    MainActions("removeLoading");

    if (newWeather.cod === 200) {
      MainActions("removeErro");
      setWeatherData(newWeather);
    } else {
      MainActions("addErro");
    }
  }

  return (
    <S.Main ref={main}>
      <Search weather={getWeather} />
      {error && <p>Cidade não encontrada</p>}
      {weatherData && <CardCidade {...weatherData} />}
      {weatherData && <CardDados {...weatherData} />}
    </S.Main>
  );
};

export default Main;
