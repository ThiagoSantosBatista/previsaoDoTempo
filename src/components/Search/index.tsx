import React from "react";
import SearchBar from "./SearchBar";
import { ReactComponent as GithubSvg } from "../../assets/svgs/github.svg";
import { ReactComponent as LinkedinSvg } from "../../assets/svgs/linkedin.svg";
import * as S from "./styles";

interface SearchBarProps {
  weather: (city: string) => Promise<void>;
}

const Search = ({ weather }: SearchBarProps) => {
  return (
    <S.Section>
      <SearchBar weather={weather} />
      <S.Article>
        <p>2023 - Thiago Batista</p>
        <nav>
          <ul>
            <li>
              <a
                aria-label="Link para o meu GitHub"
                href="https://github.com/ThiagoSantosBatista"
                target="_blank"
              >
                <GithubSvg />
              </a>
            </li>
            <li>
              <a
                aria-label="Link para o meu LinkedIn"
                href="https://www.linkedin.com/in/thiago-santos-batista/"
                target="_blank"
              >
                <LinkedinSvg />
              </a>
            </li>
          </ul>
        </nav>
      </S.Article>
    </S.Section>
  );
};

export default Search;
