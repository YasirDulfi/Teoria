//aqui is donde se conectan todos los componentes con app.js para ser
//despues leidos por index.js

//este seria el componente
import ejemploComponente from "../components/ejemploComponente";

function App() {

  const sendHandler = () => {
    console.log("se esta ejecutando el boton");
  }
  return (
    <div>
      <h2>Let's get started!</h2>
      <h3>voy a mostrar el componente</h3>
      <ejemploComponente></ejemploComponente>
      {/* ejemplo de props que sirve para pasar valores a la funcion */}
      <ejemploComponente nomAtributo="valorPromps"></ejemploComponente>
      {/*on cclick seria algo como addEventLisener('click',sendhandler)
      PD: la funcion que se ejecuta no debe llevar () pq sino se ejec
      cuando se le el codigo y no cuando se hace click*/}
      <button onClick={sendHandler}></button>
    </div>
  );
}

export default App;

