import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import imagen from './assets/images/cryptomonedas.png';
import Formulario from './components/Formulario';
import Conversion from './components/Conversion';
import Spinner from './components/Spinner';

import axios from 'axios';


const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Imagen = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #FFF;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after{
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
  }
`;

function App() {

  const [moneda, guardarMoneda] = useState('');
  const [criptomoneda, guardarCriptomoneda] = useState('');
  const [resultado, guardarResultado] = useState({});
  const [cargando, guardarCargando] = useState(false);

  useEffect(() => {

    const convertirCriptomoneda = async () => {
      // evitamos la ejecucion la primera vez
      if(moneda === '') return;
      console.log('cotizando...')
  
      // consultar la API para obtener la cotización
      const url =`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
  
      const resultado = await axios.get(url);

      //mostrar el spinner
      guardarCargando(true);

      //ocultar el spinner y mostrar el resultado
      setTimeout(() => {

        // cambiar el stado de cargando
        guardarCargando(false);
        guardarResultado(resultado.data.DISPLAY[criptomoneda][moneda])
      }, 2000)
    }
    convertirCriptomoneda();

  }, [moneda, criptomoneda]);  

  return (
    <Contenedor className="App">
      <Imagen
        src={imagen}
        alt='imagen crypto'
      />
      <Heading>Convierte criptomonedas al instante</Heading>
      <Formulario
        guardarMoneda={guardarMoneda}
        guardarCriptomoneda={guardarCriptomoneda}
      />
      {cargando &&
      <Spinner/>
      }
      {!cargando &&
      <Conversion
        resultado={resultado}
      />
      }
    </Contenedor>
  );
}

export default App;
