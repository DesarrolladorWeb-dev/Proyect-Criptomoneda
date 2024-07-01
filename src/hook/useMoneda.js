import React ,  {Fragment , useState}from 'react'
import styled from '@emotion/styled';

const Label = styled.label` 
    font-family: 'Bebas Neue', cursive;
    color : #fff;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
`;
const Select = styled.select`
    width:100%;
    display:block;
    padding:1rem;
    // para que la apariencia sea del css y no por defecto de navegador
    -webkit-appearance: none;
    border-radius:10px;
    border:none;
    font-size:1.2rem
`


// tiene su propio state
const useMoneda = (label, stateInicial, opciones) => {
    //STATE de nuestro custom hook
    const [state, actualizarState] = useState(stateInicial);


    const Seleccionar = () => (  //return con ()
    // Lo que se va a mostrar en pantalla

        <Fragment>
            <Label>{label}</Label>
            <Select
            onChange={e => actualizarState(e.target.value)}
            value={state}
            > 
                <option value=""> Seleccione </option>
                {opciones.map(opcion => (
                <option key={opcion.codigo} value={opcion.codigo}>{opcion.nombre}</option>


                ))}
            </Select>
        </Fragment>
    );
    // Retornar state, interfaz y fn que modifica el state
    // Seleccionar : que es lo que se va a mostrar en pantalla
    // es como el state solo te retorna 2  en este caso yo creo y retorno 3 
    return [state, Seleccionar, actualizarState];
}



export default useMoneda