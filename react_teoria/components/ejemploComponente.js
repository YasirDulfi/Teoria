import './ejemploComponente.css';
//añado un subcomponente para este componente
import componDeComp from './componDeComp';

function ejemploComponente(props) {
    //en esta parte de la funcion es donde se hace las operaciones para 
    //despues mostrar en el return
    var fecha = new Date();
    const year = fecha.getFullYear(); 

    //recibimos de los valores otorgados en app.js en los atributos 
    //y podemos acceder a el atraves del objeto props

    // en el return van las etiquetas de html que se van a devolver
    return(
        //solo se puede añadir un div por funtion a menos que los divs 
        //esten dentro del div general
        <div className="ejemplo">
            <h2>ejemplo de componentes</h2>
            {/* ponemos { } para poner dentro una variable, o operaciones */}
            <p>{year}</p>
            <p>{props.nombreAtributo}</p>
            {/* llamo al subcomponente */}
            <componDeComp atributo="subcomponente_funciona"> 
            aqui se añade los valores pasados en caso de prop.children
            </componDeComp>
        </div>
    );
}

export default ejemploComponente; 

