import React from 'react'
import styled from '@emotion/styled'

const ResultadoDiv = styled.div`
    color: #FFF;
    font-family: Arial, Helvetica, sans-serif;
`
const Info = styled.p`
    font-size: 18px;
    span{
        font-weight: bold;

    }
`
const Precio = styled.p`
    font-size: 30px;
    span{
        font-weight: bold;
    }
`

function Cotizacion({resultado}) {
    //TODO  si el objeto llega vacio no ejecutara nada
    if(Object.keys(resultado).length === 0) return null
    console.log(resultado)
  return (
    <ResultadoDiv>
        <Precio>El precio es : <span>{resultado.PRICE}</span> </Precio>
        <Info>El precio mas alto del dia : <span>{resultado.HIGHDAY}</span> </Info>
        <Info>El precio mas bajo del dia : <span>{resultado.LOWDAY}</span> </Info>
        <Info>Variacion ultimas 24 horas : <span>{resultado.CHANGEPCT24HOUR}</span> </Info>
        <Info>Ultimas Actualizacion : <span>{resultado.LASTUPDATE}</span> </Info>
    </ResultadoDiv>
  )
}

export default Cotizacion