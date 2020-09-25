import React ,{Fragment,useState,useEffect}from 'react';
import Clima from './components/Clima';
import Formulario from './components/Formulario';
import Header from './components/Header';

function App() {

  //State Principal 

  
  const [state , guardarState] = useState({})

 // State para controlar el Submit 

 const {ciudad , pais} = state

 //State para mayor control con UseEffect
 const [consultar , guardarConsultar] = useState(false)

 // State para el Resultado 

 const [ resultado , guardarResultado] = useState({});

 // State para detectar resultado 

 const [ error , guardarError] = useState(false);





 


 // Utilizo el UseEffect

 useEffect(()=>{

  const consultarApi = async () => {

    if(consultar){

      
    const apiId = "8eb838ccb486e45f163af8c5502db9c8"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apiId}`

    const respuesta = await fetch(url);
    const resultado =  await respuesta.json()

     guardarResultado(resultado)
     guardarConsultar(false)

     // Detecta el resultado 

     if(resultado.cod === "404"){

      guardarError(true)

     }else{

      guardarError(false)

     }

    }else{
      return null
    }
   
    
  }
  consultarApi();
   
   
 },[consultar])

 
//
  
//


  return (
    <Fragment>
      <Header
        titulo="React-Clima"
      />

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
                <div className=" col m6 s12">
                <Formulario

                 guardarState={guardarState}
                 guardarConsultar={guardarConsultar}

                />
                </div>

                <div className=" col m6 s12">
                  {error?
                  
                  <p className="red darken-2 error">No hay Resultado ( " Verifique la busqueda " )</p>
                  
                  : 


                  <Clima
                      resultado={resultado}
                  />
                  
                  }
                </div>

          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
