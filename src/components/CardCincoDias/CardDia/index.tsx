import React from 'react'
import * as S from './styles'

interface CardDiaProps {
    dia: string;
    src: string;
    tempo: string;
    min: string;
    max: string;
}

const CardDia = ({dia, src, tempo, min, max}:CardDiaProps) => {
  return (
    <S.Li>
        <p>{dia}</p>
        <img src={src} alt="" />
        <h3>{tempo}</h3>
        <p>{min}</p>
        <p>{max}</p>
    </S.Li>
  )
}

export default CardDia