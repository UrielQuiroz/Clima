import React, { useState } from 'react';
import Error from './Error';

const Formulario = ({ busqueda, setBusqueda, setConsulta }) => {

    //State para errores
    const [ error, setError ] = useState(false);

    //Extraer ciudad y pais
    const { ciudad, pais } = busqueda;

    //Funcin que coloca los elementos en el state
    const handleChange = e => {
        //Actualiza el state
        setBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    //Cuando el usuario da submit al form
    const handleSubmit = e => {
        e.preventDefault();

        //Validar
        if ([ciudad, error].includes('')) {
            setError(true);
            return;
        }

        setError(false);

        //Pasar al state principal
        setConsulta(true);
    }

    return (
        <form
            onSubmit={handleSubmit}>
            
            {error ? <Error mensaje='Ambos campos son obligatorios' /> : null}

            <div className='input-field col s12'>
                <input 
                    type="text"
                    name='ciudad'
                    id='ciudad'
                    value={ciudad}
                    onChange={handleChange} />
                <label htmlFor="ciudad">Ciudad: </label>
            </div>

            <div className='input-field col s12'>
                <select 
                    name="pais" 
                    id="pais"
                    value={pais}
                    onChange={handleChange} >
                        <option value="">-- Seleccione un país --</option>
                        <option value="US">Estados Unidos</option>
                        <option value="MX">México</option>
                        <option value="AR">Argentina</option>
                        <option value="CO">Colombia</option>
                        <option value="CR">Costa Rica</option>
                        <option value="ES">España</option>
                        <option value="PE">Perú</option>
                </select>
                <label htmlFor="pais">País: </label>
            </div>

            <div className='input-field col s12'>
            <button
                type="submit"
                className="waves-effect waves-light btn-large btn-block yellow accent-4 col s12">
                Buscar Clima</button>
            </div>
        </form>
    )
}

export default Formulario
