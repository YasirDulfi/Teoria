var contenedor = document.getElementById("tabla-ul");

var nodoRef = document.getElementById("tabla-li");

fetch('./baseDatos.json')
    .then(datos => datos.json())
    .then(datos => { crearTabla(datos)})


function crearTabla(datos) {
    
        for(let i=0; i<Object.entries(datos).length; i++){
            var newLi = document.createElement('li');
            newLi.id = "tabla-li";
            
            var divID = document.createElement("div");
            divID.id = "id";
            var divNombre = document.createElement("div");
            divNombre.id = "nombre";
            var divEmail = document.createElement("div");
            divEmail.id = "email";
            var divEstado = document.createElement("div");
            divEstado.id = "estado";
 
             var datosTransform = Object.entries(datos);
 
             divID.innerHTML = datosTransform[i][1].id;
             divNombre.innerHTML = datosTransform[i][1].nombre;
             divEmail.innerHTML = datosTransform[i][1].email;
             divEstado.innerHTML = datosTransform[i][1].estado;
 
             newLi.appendChild(divID);
             newLi.appendChild(divNombre);
             newLi.appendChild(divEmail);
             newLi.appendChild(divEstado);
             
             contenedor.insertBefore(newLi, nodoRef );
        }
}
