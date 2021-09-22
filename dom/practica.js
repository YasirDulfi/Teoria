
var elemento = document.getElementById("contenido").value;
var numero = document.getElementById("numero-list").value;
var enviar = document.getElementById("add");
var lista = document.getElementById("list-group");
var borrar = document.getElementById("borrar");


enviar.addEventListener('click', mostrar)

function mostrar (accion) {
	console.log(elemento.nodeValue);
	console.log(numero);
	console.log(enviar);
	console.log(lista);
	console.log(borrar);
	
}



enviar.addEventListener('click', añadir);

function añadir (accion) {

	accion.preventDafault();
	//creo el li y el boton
		var contenedorElemento = document.createElement('li');
		var botonBorrar = document.createElement('button');

	//pongo id
		contenedorElemento.id = "list-group-item";
		botonBorrar.id = "borrar";

	//al boton le pongo dentro un X
		botonBorrar.innerText = "X";

	//meto el boton y el texto dentro de li
		contenedorElemento.appendChild(elemento);
		contenedorElemento.appendChild(botonBorrar);

	//averigua cual es el li donde se queira poner
		let i =  document.querySelectorAll('#list-group-item');
		
	//pongo el li ya finalizado en la posicion correspondiente
	lista.insertBefore(contenedorElemento, lista.childNodes[i]);

}



borrar.addEventListener('click', eliminar);

function eliminar (accion) {
	let i =  document.querySelectorAll('#list-group-item');
	lista.removeChild(i[numero]);
}



















