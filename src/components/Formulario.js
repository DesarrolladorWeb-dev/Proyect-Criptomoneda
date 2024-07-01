import React , {useEffect, useState} from 'react'
import styled from '@emotion/styled'
import useMoneda from '../hook/useMoneda'
import useCriptomoneda from '../hook/useCriptomoneda'
import axios from 'axios'
import Error from './Error'

const Boton = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border:none;
    width: 100%;
    border-radius: 10px;
    color: #FFF;
    transition: background-color .3s ease;

    &:hover{
        background-color : #326ac0;
        cursor: pointer;
    }

`

function Formulario({guardarMoneda, guardarCriptomonda }) {

  // state del listado de criptomonedas
  const [listacripto , guardarCriptomonedas] = useState([]); //sera un arreglo de objetos
  const [error, guardarError] = useState(false);


  const MONEDAS = [
    {codigo : 'USD' , nombre: 'Dolar de Estados Unidos' },
    {codigo : 'MXN' , nombre: 'Peso Mexicano' },
    {codigo : 'EUR' , nombre: 'Euro' },
    {codigo : 'GBP' , nombre: 'Libra Esterlina' },

  ]

  // Utilizar useMoneda
  const[moneda, SelectMonedas ] = useMoneda('Elige tu moneda', '', MONEDAS);

  //utilizar useCriptomoneda
  // listacripto primero comienzan con un lista vacia pero luego ya tienen al realizar la peticion con el axios
  const[criptomoneda, SelectCripto] = useCriptomoneda('Elige tu Criptomoneda','', listacripto)

  //Ejecutar llamado a la API
  useEffect (() => { //se ejecuta cuando se realiza renderiza el componente
    const consultarAPI = async () =>{
      const url  = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
      const resultado = await axios.get(url);

      guardarCriptomonedas(resultado.data.Data); // de esta forma ingreso valores al state de listacripto
    }

    consultarAPI();
  }, []);

  // cuando el usuario hace submit
  const cotizarMoneda = e => {
    e.preventDefault();

    // validar si ambos campos estan llenos
    if(moneda === '' || criptomoneda === ''  ){
      guardarError(true)
      return;
    }
    // pasar los datos al componente principal
    guardarError(false);
    guardarMoneda(moneda)
    guardarCriptomonda(criptomoneda)
  }

  return (
    <form
      onSubmit={cotizarMoneda}
    >
      {error ? <Error mensaje = 'TOdos los campos son obligatorios'/> : null }
      <SelectMonedas/>

      <SelectCripto/>
        <Boton
        type='submit'
        value='Calculadora'
        />
    </form>
  )
}

export default Formulario