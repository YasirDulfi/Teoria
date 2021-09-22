var formulario = document.getElementById("formulario");

formulario.addEventListener('submit', enviar);

function enviar(accion) {
    accion.preventDefault();

    var datos = new FormData(formulario);
   
    fetch('post.php', {
        method : 'POST',
        body: datos,
        headers: {'Content-Type': 'application/json'} 
        })
        .then(respuesta => respuesta.json())
        .then(data => {
            console.log(data);
        })
}