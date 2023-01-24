import React from "react";
import { ReactComponent as SearchSvg } from "../../assets/svgs/search.svg";
import * as S from './styles'

const SearchBar = () => {
  return (
    <S.Form>
      <S.Input type="text" placeholder="Nome da cidade" />
      <S.Button type="button">
        <SearchSvg />
      </S.Button>
    </S.Form>
  );
};

export default SearchBar;
