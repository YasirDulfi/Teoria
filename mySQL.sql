
Use nombre_baseDatos/*Enlazamos el query con la base de datos */



SELECT columnaEscogido,  /* seleccionamos la columna que queremos para nuestra tabla*/
       columnaEscogido2  /*para crear una nueva tabla*/                                          
FROM nombre_tabla    /*cogemos la tabla columnaEscogida de tabla */
WHERE nomb_atributo > 1 AND atributo2 != 0/* cogemos solo los elementos que cumplan*/
ORDER BY nomb_atributo  /* nos da la lista ordenada segun el atriburo seleccionado */


SELECT columnaEscogida + 10 AS 'el nombre que queiras dar' /* Nos devuelve la columna + 10 a 
todos sus elementos pero adema se llamaria columanEscogida + 10 
por lo que le cambiamos el nombre con AS */
-----------------------------
SELECT DISTINCT columanEscogida  /* nos devuelve la tabla sin elementos repetidos */ 
FROM tabla            
/* operadores para WHERE */ 
AND 

NOT 

WHERE OR X=2 OR X=3 ....  

WHERE X IN ('2', '3')

WHERE X BETWEEN 2 AND 3

WHERE nombre LIKE 'ya%' OR '__a'/* esto signifia que nos devuelve cualquier elemento que 
empieze por ya y el % te dice que no importa el numero de letras que viene despues
el otro elemento me dice que le da igual el 1y2 caracter _ pero el 3ndo tiene que ser a  */

WHERE nombre REGEXP 
'asi' /*es lo mismo que like pero no hace falta %*/
'^yas' /*debe de empezar por yas*/
'sir$' /*significa que debe terminar con sir*/
'ya|ir' /*selecciona los elementos de la tabla nombre que contengan 'ya' o 'ir' o ...*/
'[ysr]a' /*seleciona los elemento que contengan 'ya' o 'sa' o 'ra'*/
'i[r-z]' /*selecciona los elementos que contengan 'ir' o 'io'.....'iz'*/
WHERE nombre IS NULL 
-----------------
ORDER BY 
id*2, /*primero ordena segun id y entre los mismos id ordena segun el nombre*/
nombre DESC  /*el nombre se ordena de manera descendente !el valor predeterminado 
es ascendente*/
-------------------
LIMIT 
6,/*se empieza desde el 7ptimo elemento ignorando los 6 primeros*/ 
3 /*hace que del select solo se escojan 3 elementos de la tabla"*/
--------------------------
/*JOIN crear una nuebla tabla uniendo otras dos*/
SELECT *
FROM tabla1
JOIN tabla2 
    ON tabla1.id = tabla2.id; /*une tabla1 y tabla2 desde el id*/
JOIN tabla3
    ON ....... /*unimos una 3 tabla*/
    AND ...... /*añadimos otra condicion*/

/*SelfJoin unir una tabla con ella misma*/
SELECT 
    worker.trabajador_nombre, 
    worker.trabajador_id, 
    manager.trabajador_id
FROM trabajador worker
JOIN trabajador manager
    ON  ........

/*Outer join*/
FROM usuarios
LEFT JOIN pedido /*se devuelven todos los clientes aunque no cumplen con la condicion*/
RIGHT JOIN pedido /*se devuelven todos los pedidos aunque no cumplen con la condicion*/

/*utilizar USING en vez de n */
ON usuario.id = pedido.id
    AND usuario.Clientname = pedido.Clientname
USING (id, Clientname) /*el nombre de la columna deben de ser igual en ambas tablas*/

/*UNION*/

SELECT nombre
FROM clientes
on ......
JOIN ......
UNION   
SELECT nombre_cliente
FROM pedido


/*Añadir linea a una tabla*/
INSERT INTO nombre_tabla (id, nombre, talla) /*añado los atributos de la tabla */
VALUE                                        /*a la que vamos a añadir valor*/
    ( /*nombre_tabla esta esta compuesto de id, nombre y talla*/
    DEFAULT, /*ID*/
    'YASIR', /*NOMBRE*/
    'L' /*TALLA*/
    ), 
    (
    DEFAULT, /*ID FILA 2*/
    'SARA', /*NOMBRE FILA 2*/
    'S' /*TALLA FILA 2*/
    )

/*Copy data from one table to an other*/
CREATE TABLE nombre_nuevaTabla AS
SELECT * FROM tabla1
WHERE .....
JOIN ......

/*Update el valor de una fila*/
UPDATE tabla1 
SET     
    atributo1 = 10,
    atrubuto2 = '2000-01-01'
WHERE 
    id = 1 OR
    id > 3


/*Delete a row */
DELETE FROM tabla1
WHERE id = 1