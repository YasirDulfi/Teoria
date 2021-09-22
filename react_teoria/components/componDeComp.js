function componDeComp(props) {
    //lo que hacemos aqui es generar el subcomponente de un componente
    //para asi aliviar la carga de codigo en en el componente

    return(
        <p>{props.atributo}</p>
    );

}

export default componDeComp;


/*
-----------------------props.children---------------------------
hay veces en donde se repite mucho el estilo de un elemento como
botones o cartas, en esos caso lo que podemos hacer es utilizar en 
el componente <nomSubComp>Iniciar Sesion</nomSubComp> y en el subcomp
añadimos props.children

props.childer hace que el contenido entre las estiquetas <> 
se envie como props eso si hay que despues tranformar l props para que 
se pueda leer por className


*/
