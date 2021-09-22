
						// JAVASCRIPT 

/* 

	'use strict'; hace que js no cree una variable global


	ejecutar en la consola
		console.log(x).... para numeros



    declarar variable
    	var x = "y";
    	let x = "z";
    	cost x= "l";

    	There are 7 fundamental data types in JavaScript: strings,
    	 numbers, booleans, null, undefined, symbol, and object.

    asignar un valor en javascript
		x = 4;

		*hay que tener cuidado con los / ya que son muy utiles 
		para que al console.log() no se ejecute lo que esta 
		despues como... ejem
			stringEjem = "\"aqui no se que \t\""
			resultado es "aqui no se que t"

		si se quiere ejecutar una variable dentro de un 
		console.log('hay que poner ${la variable aqui a dentro}')
		y se ejecutara

	Operaciones con variables
		string x = "hola";
		x = x + "mundo";
		(resultado va a ser "hola mundo")

		+ , - , * , / lo normal
		
		x++ or x = x+1; incrementa +1 el valor de x y viceversa
		con menos;
		a += 5 el lo mismo que a = a + 5 y viceversa con - , * , /;

		* % devuelve el resulado de la divion pero en int ej
			var = 12 % 5; (12/5 = 2.4)
			resultado es 2(int)

		*Las operaciones de los decimale se tienen que hacer con otro
		decimal ej:
			x = 2.0 + 2.3;


		*Operaciones con string
			n.toString()...... para strings
		
			PD: se puede ejecutar varias veces en el codigo
			"stringEjemplo".lenght nos dara como resultado el numero
			de caracteres del texto seleccionado que en este caso 
			seria 3

			'ejemploString'.trim()---> te quita el espacio en 
			blanco sobrante

			'ejemploString'.toUppercase()--> pone en mayusculas




	OBJETOS

		console
			metodos:
				
				console.log(x)--->nos muestra el valor de x
		object

		fuction

		boolean

		Math
			metodos:
				
				Math.random()-->random number between 0 and 1

				Math.floor(x)-->te genera un numero entero

				Math.sqrt2 or 1_2(1/2)->raiz cuadrada o..

				Math.cos(x) sen(x)

				Math.log(x)

		date

		string

		array




	Funciones

		1ªdefino y la variable:

			function ejemploFuncion(){
	
				console.log( "ahi vamos" );
			}	

		2ºdeclare the variable:

			ejemploFuncion();

		3ºdeclarar valores que se introducen a la funcion


			function ejemploFuncion(valor){
		
					console.log( "ahi vamos"+valor+'!' );
				}

			* para establecer un valor de default en caso de 
			que no se introduzca ningun valor hay que	
			
					function ejemploFuncion(valor='bootcamp'){...
			el resultado seria "ahi vamos bootcamp!"

			function expresion ejemplo

		cont valor = function (parametro1, parametro2,...){

			defino la funcion

			return resulado;
		}; 

		o tambien sirve

		cont valor = (parametro1, parametro2...)=>{

			defino la funcion
			return resultado;
		}

		funciones flechas 

		(atributo) => {
		  return atributo + 100;
		}

		refraccion de una funcion: 

		const valor = parametro1 => se deja de utilizar { si es 1 linea;

			o
		cont valor = parametro1 => {
			argumento en caso de que sea mas de una linea;
			return resultado;
		}
		if statement


			if(somenthing){

				retun x;
			} else {

				return y;
			}

			o

			condicion ? expresion1(true) : expresion2(false);
		
		Function Generator: La funcion ejecuta todo el codigo y genera un obj,
							yield se usa para pausar y reanudar una función generadora
							y la expresion que tiene escrita delante se devuelve segun el 
							num de veces se ha ejecutado esa funcion
			
			function* nomFuncion(){
				se ejecuta lo escrito aqui con el primer yield con el primer next();
				yield nomVar1;
				se ejecuta lo escrito aqui con el segundo yield
				yield nomVar2;
				se ejecuta lo escrito aqui cuando se ha ejecutado el obj.next() x3;
				yield nomVar3;
			}

			var nomObjeto = nomFuncion(); We set the function wich doesnt have any value yet
			var nomObjeto2 = nomFuncion(); Se puede añadir varios objetos con la misma 
										  funcion cuya valor y yield ddifere del anterior							  

			nomObjeto.next();devuelve un obj que contiene dos valores
							 done(0 o 1)representa si es el final de Fun
							 value que representa el valor devuletto de yield 



		Arrays

			Declaracion: const ejemplo = ['1', '2', '3'];

			se puede añadir al array de dos maneras 

				1º ejemplo = ['5']/ resultado cosnsole es ['5']
				2º ejemplo[1] = ['5']/ resultado del console es ['1', '5', '3']

			Metodos

				console.log(ejemplo.length) = 3

				console.log(ejemplo.push('4')) = ['1', '5', '3', '4'] Nos añade 
				a la cadena un espacio mas

				ejemplo.pop() hace justo lo contrario elimina un espacio ej
				console.log(ejemplo.pop()) =['1', '5', '3']

				.slice()
					const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

					console.log(animals.slice(2, 4));
					// expected output: Array ["camel", "duck"]
				
				.indexOf('string ejemplo')

				nos da como resultado la posicion del string

		Matrices

			const ejemplo = [[1,2],[3,4],[5,6]];
			console.log(ejemplo[2][1]) = 6



		Objeto:

			// Defining an object
				var cat = {
				  name: 'Chloe',
				  age: 5,
				  color: 'gray',
				  meow: function () {
				    console.log('meow meow');
				  }
				};

			// Accessing a property
				cat['name'] // -> 'Chloe'

			// Accessing a property through "dot notation"
				cat.name // -> 'Chloe'
			
			// Creates a new key of 'speed' with a value of 'Mach 5'
			 	cat.owner = 'Yasir';

			//Delete a key from the object
				delete cat.owner;

			//Metodo fentro de un objeto 
				PD ALERTA si se quiere poner mas de dos metodos hay poner una coma
				var cat = {
					ejemploFuncion(){
						console.log('Una funcion dentro de un objeto es metodo');
					}
				}, ... mas metodos

				cat.ejemploFuncion();

			//Nested object 

				const spaceship = {
				     telescope: {
				        yearBuilt: 2018,
				        model: '91031-XLT',
				        focalLength: 2032 
				     },
				    crew: {
				        captain: { 
				            name: 'Sandra', 
				            degree: 'Computer Engineering', 
				            encourageTeam() { console.log('We got this!') } 
				         }
				    },
				    engine: {
				        model: 'Nimbus2000'
				     },
				     nanoelectronics: {
				         computer: {
				            terabytes: 100,
				            monitors: 'HD'
				         },
				        'back-up': {
				           battery: 'Lithium',
				           terabytes: 50
				         }
				    }
				}; 

				llamar a un objeto: console.log(spaceship.crew.captain[name]);

				rellenar un array con un objeto para introducirlo en el objeto ej:

					console.log(spaceship.crearNuevoArray = [{nombre : 'yasir' }])
						el resultado es que hemos creado un nuevo array dentro del
						objeto y lo hemos rellenado con nombre : yasir


				DOLOR DE CABEZA array object and object array:

					let ejemploArray = 
						[
							{valor1 : amor,
							valor2 : odio,
							...............},

							{patriarcado :no...}				

						]


					let ejemploObjeto = {
	
						valor1 : amor,

						ejemploObjetoDentroDeObjeto : {
							valor1 : amor,
							valor2 : odio,
							...............},

							{patriarcado :no...}
						},

						ejemploArrayDentroDeObjeto : [amor, pasio, fuerza],

						ejemploObjetoDentroDeArrayDentroDeObjeto : {
							elArray : [
								elObjeto : {
									name : yasir
								},
								valor1000 : 100
0							]
						}

						valor2 : odio,...

					}

					FOR para recorrer obje

					for(propiedad in objeto){
						console.log(objeto[propiedad]);
					}



					METODOS!!!!

					forEach()
					slice()
					push()
					Math.squrt
					Math.floor
					Math.pow
					test()
					toUpperCase()
					toLowerCase()
					toString()
					toArray()
					map()
					join()
					filter()
					reduce()
					random()
					findIndex()
					indexof() 
					reduce((accumulator, currentValue) =>...
					some
					every
					include()
					name
					stop()
					now()
					split_list_in_n(a, 2)
					split()
					for in

					Para objertos y clases
						object.keys(nomObjeto)
						object.entries(nomObjeto)
						returnedTarget = Object.assign(target, source);
						call
						bind
						apply

					Para arrays


					PROMESAS:

						DEFINO LA PROMESA	
						cont nomVar = Promise.resolve(var o function...);
						nombre
							.then(var => var + 5)
							.then(function(5))
							.then(var => Promise.resolve(var+5))
							.then(var => Promise.reject('Error!!') )
							.catch(error => console.log(e))


						Otra manera de definir la promesa:

						const myExecutor = x => new Promise(
							(resolve , reject) => {
						  if(inventory.sunglasses > 0){
						    resolve('Sunglasses order processed.');
						  } else {
						    reject('That item is sold out.');
						  }
						  )
						}
						
						myExecutor(inventarioGafas)
							.then(inventrio => inventario+1)
							.catch(err => console.log(err))

						LLAMO LA PROMESA ATRAVES DE LA FUNCION

						var orderPromise = myExecutor();




					AJAX REQUEST 

						//conecto con una API
						const peticion = new XMLHttpRequest();
							const url = url("https://api-to-call.com/endpoint");
							peticion.responseType = 'json';

							peticion.onreadystatechange = () => {
							    if(peticion.readyState === XMLHttpRequest.DONE){
							      return peticion.response;
							    }
							    peticion.open('GET', url);
							    peticion.send();
							}
							!!IMPORTANTE!! peticion.readyState y peticion.status peticion.onload


						//Con una base de datos	PHP + AJAX
				
							var peticion = new XMLHtmlRequest();
							peticion.open('POST', 'usuario.php');
							peticion.send();

							PREPARO UN PHP PARA QUE DEVUELVA UN JSON
							
							<?php
								header('Content-type: application/json; charset=utf-8');


								echo json_encode($array);
							?>

	
	console.log(document);
	console.log(document.forms);
	console.log(document.forms[0]);
	console.log(document.getElementById('no hay ejemplo hahah'));
	console.log(document.getElementsByClassName('list-group'));

	var variableName = document.getElementsByClassName('list-grou')

	SELECCIONAR ELEMENTOS 

		Para getElementsByClassName{
			!IMPORTANTE!!!!! [0]--> hace referencia al html
							[1]--> hace referencia al HTMLContent

		}			

		Para getElementById no hace falta subindice
		

		GetElementByTagName('h1') escoge todos los h1

		querySelector('.nombreDeLaClase') -> selecciona el 
					o ('#nombreDelID')       primer elemento
					o ('ul?) 
		}

		querySelectorAll() -> selecciona todo lo que metas en
							el parentesis
		


	}

	subpropiedades en el HTMLColecction
		variableName.textContent 
		variableName.innerText
		variableName[0].innerHTML = '<p> pongo el texto dentor de la clase </p>';
		variableName[0].style.borderBottom = '3px solid green';
		......................
	}

	seleccionar el padre, los hijos o los hermanos de un elemento

		padres:

		variableName.parentNode.style.color=-> si variabeName 
				selects h1 que esta en header entonces
				parentNode hace ref a header.

		-
		VariableName.parentElement es similar al de arriba

		hijos:

		variableName.children -> selecciona a los niños de una clase

		variableName.firstChildren

		variableName.lastChild
		
		hermanos:

		variableName.nextSibling

		variableName.previousSibling

		variableName.
	}

	AÑADIR ELEMENTOS {

		create a new element
			var variableName = document.createElement('div');

		añadimos una clase al elemento
			variableName.className = 'className'; ...

		crear un texto asociado a una variable en js
			var textoVar = document.createTextNode('olee el dom');
		
		Añadir el texto o lo que sea al div que hemos creado
			vaiableName.appendChild(textoVar);
		
		Añade un hijo antes de un node de ref
			parentNode.insertBefore(newNode, referenceNode);

	}

	ELIINAR ELEMENTO {

		delete a child element:
			varName.removeChild(aqui va el niño)
	}

	EVENT LISENER  {

		var variableName = document.getElementById('boton1').add
		EventListener('accion ej: click, dblclick, mousedown
		,mouseup, mouseenter, mouseleave, mouseover, mouseleave
		,mousemove, keydown, keyup, keypress, focus, blure,
		cut, paste, input, change, submit(para botones  mejor 
			varfuncion.preventDefault())...', 
		funcion(event-parameter ))
		la funcion se puede definir en el addEvent o afuera de el

		click-actions:
		varibaleName.offsetX o Y
		
		mouse-action: 
		variableName.
	}
	!!IMPORTANTE si se quire el valor de lo que se seleccione 
	haz acciondentrodelafuncion.target.value

	
	this.dataset.nomData -> nos devuelve el valor de la etiqueta html
							que tenga data*nomData = ....


	window.confirm("seguro que lo quieres eliminar?"); -> nos devuelve
							en pantalla un si o no cuadro 
	
	
	
	
	
	
------------------------------------Fetch API------------------------------------

	fetch('url',
	 	  method: 'POST' , 'GET', 'DELETE', 'PUT(Actualizar datos)' 
		  
		   headers: {
			  'Content-Type' : 'application/json',
			  '.....' : '.....',
			}

			body: {	JSON.stringify({
				elObjetoQueQuieresEnviar: 'valor',
				nombre: 'yasir'
				

			})

			}
	)


		
	function adder(accion) {
		fetch('./texto.txt')
		.then(data => data.text())
		.then(data =>{
			contenido.innerHTML = data;
		})
	} 





	MODULOS se necesita webpack

		caso 1: funcion con nombre default

		1º preparar el documento para exportar
		export default function (nombreF  )

		2º importar el documento
		import nombreQueQuieras from './app.js'

		3º acceder a la funcion exportada
		nombreQueQuieras('valor');

		caso 2: funcion con nombre determindo

		export function nomFuncion (nombre){};
		import {nomFuncion} from './app';

		caso 3 multiples funciones:
		
		export function nomFunction (nombre){};
		export function nomFunction2 (nombre){};
		import {nomfunction, nomFunction2} from './app';

		caso 4: funcion con nombre en default + determinado

		import nombreQueQuierasDar, {nomFunDeterminado, nomFunDeterminado2};

		caso 5: EL MEJOR QUE ES TRABAJAR CON OBJETOS

		export default {
			nomFuncion1: nomFuncion1,
			nomFuncion2: nomFuncion2,
			.....
		}

		import nombreQueQuieras from '/app.js';
		nombreQueQuieras.nomFuncion1('valor');
		.........



		ALMACENAR SESIONES EN JAVASCRIPT DE PARTE DEL CLIENTE

		crear session

		sessionStorage.setItem('key', 'value');
		

		Spread and rest operators

			spread-> se añade ... delante de un objeto o array viejo
			en el cual se desea pasar todos sus valores a otro objeto o 
			array ej:

			const newArray = [...oldArray, 1,2,3];
			const newObject = {...oldobject, newproperty:5};

		
			


*/