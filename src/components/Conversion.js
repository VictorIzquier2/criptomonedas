import React from 'react';
import styled from '@emotion/styled';

const ResultadoDiv = styled.div`
  color: #FFF;
  font-family: Arial, Helvetica, sans-serif;
`;

const Info = styled.p`
  font-size: 18px;
  text-transform: uppercase;
  span{
    font-weight: bold;
  }
`;

const Precio = styled.p`
  font-size: 30px;
  text-transform: uppercase;
  span{
    font-weight: bolder;
  }
`;


const Conversion = ({resultado}) => {
  if(Object.keys(resultado).length === 0) return null;

  console.log(resultado);
  return(
    <ResultadoDiv>
      <Precio>Precio: <span>{resultado.PRICE}</span></Precio>
      <Info>Max/Dia: <span>{resultado.HIGHDAY}</span></Info>
      <Info>Min/Dia: <span>{resultado.LOWDAY}</span></Info>
      <Info>%24h: <span>{resultado.CHANGE24HOUR}</span></Info>
      <Info>Última comprobación: <span>{resultado.LASTUPDATE}</span></Info>
    </ResultadoDiv>
  )
}
export default Conversion;