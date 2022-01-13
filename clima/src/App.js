import { Fragment, useEffect, useState } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";

function App() {

    //State deñ formulario
    const [ busqueda, setBusqueda ] = useState({
        ciudad: '',
        pais: ''
    });

    const [ consulta, setConsulta ] = useState(false);

    const { ciudad, pais } = busqueda;

    useEffect(() => {
        const consultarApi = async () => {

          if (consulta) {
            const appId = 'a25b385e5e1674e75c9ee2d3ce64cbfc';
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
  
            const rpta = await fetch(url);
            const result = await rpta.json();
            console.log(result);
          }

        }

        consultarApi();
    }, [consulta]);

  return (
    <Fragment>
        <Header
            titulo='Clima React App' />

        <div className="contenedor-form">
          <div className="container">
            <div className='row'>

              <div className='col m6 s12'>
                <Formulario
                      busqueda={busqueda}
                      setBusqueda={setBusqueda}
                      setConsulta={setConsulta} />
              </div>

              <div className='col m6 s12'>
                2
              </div>

            </div>
          </div>
        </div>
    </Fragment>
  );
}

export default App;
