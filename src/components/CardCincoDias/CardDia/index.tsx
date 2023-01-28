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
        <h4>{tempo}</h4>
        <p>{min}</p>
        <p>{max}</p>
    </S.Li>
  )
}

export default CardDia