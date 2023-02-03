import React, { useState } from "react";
import { ReactComponent as SearchSvg } from "../../../assets/svgs/search.svg";
import * as S from "./styles";

interface SearchBarProps {
  weather: (city: string) => Promise<void>;
}

const SearchBar = ({ weather }: SearchBarProps) => {
  const [city, setCity] = useState("");

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter") {
      weather(city);
    }
  }

  return (
    <>
      <S.Form onSubmit={(e) => e.preventDefault()}>
        <S.Input
          type="text"
          className="input"
          placeholder="Nome da cidade"
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <S.Button type="button" onClick={() => weather(city)}>
          <SearchSvg className="searchIcon" />
          <span className="load"></span>
        </S.Button>
        <p className="error">Cidade não encontrada</p>
      </S.Form>
    </>
  );
};

export default SearchBar;
