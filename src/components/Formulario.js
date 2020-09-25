import React,{useState} from 'react'

const Formulario = ({ guardarState,guardarConsultar}) => {

    // State del Formulario

    const [busqueda , guardarBusqueda] = useState({

        ciudad:'',
        pais:''
    })

    //State del Error

    const [error , guardarError] = useState(false)

    // Saco datos del State

    const {ciudad, pais} = busqueda


    // Funcion que coloca datos en el State

    const handleChange = e => {

        guardarBusqueda({

            ...busqueda,
            [e.target.name]:e.target.value
        })

    }

    // Funcion del Submit

    const handleSubmit = e => {

        e.preventDefault();

        if( ciudad.trim()==="" || pais.trim()==="" ) {

            guardarError(true)
            return;

        }

        guardarError(false);

        // Envio al componente Principal 

        guardarState(busqueda);
        guardarConsultar(true)
        

        

    }




    return (
        <div>
            {error ? <p className="red darken-2 error">Todos los campos son obligatorios</p> : null}
            <form
                onSubmit={handleSubmit}
            >

            

                <div className="input-field col s12">
                    <input
                        type="text"
                        name="ciudad"
                        id="ciudad"
                        value={ciudad}
                        onChange={handleChange}
                    />

                    <label htmlFor="ciudad">Ciudad</label>
                </div>

                <div className="input-field col s12">

                    <select
                     name="pais"
                     id="pais"
                     value={pais}
                     onChange={handleChange}
                     >

                        <option value="">Seleccione un pais</option>
                        <option value="US">Estados Unidos</option>
                        <option value="MX">México</option>
                        <option value="AR">Argentina</option>
                        <option value="CO">Colombia</option>
                        <option value="CR">Costa Rica</option>
                        <option value="ES">España</option>
                        <option value="PE">Perú</option>
                    </select>

                    <label htmlFor="pais">Pais</label>


                </div>

                <button
                 type="submit"
                 className="waves-effect waves-light btn-large btn-block deep-purple col s12"
                 >
                     Buscar Clima
                 </button>
                 
                



            </form>
        </div>
    )
}

export default Formulario
