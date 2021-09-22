Mostrar
-----------------------
echo("hello world");
echo "<h1>Hola mundo</h1>";
echo $varNombre;


Variables
--------------------
$nombre = "yasir";

Array
----------------------
$nomArray = array("elemento0", "elemento1", "elemento2"...);
echo $nomArray[0];
count($nomArray) -> el num de elementos del array
Array en un input-> name="nomArray[]" value="valorQueQuieresMeter"

Array Asociativo -> $nomArrayA = array("elemento1"=>"amor", "elemento2"=>"compasion",...)
$nomArrayA["elemento1"]; el eleento1 es el index para acceder a amor;
Input ArrayA -> name="nameInput"; $nomArrayA[$_POST["nameInput"]]

!!IMPORTANTE extract($nomArrayA); -> crea dos variables $elemento1=amor y elemento2=compasion

array_pop($var1) -> elimina el ultimo elemento de var1, pero este valor se puede guardar

join(';', $var) -> separa el contenido de var por comas 

sort($array1) -> nos ordena el array

String operations
-------------------------
echo strtolower($nomVar);
echo strtoupper($nomVar);
echo strlen($nomVar); --> calcula  length

echo $nomVar[0] --> H  

str_remplace("parabraQueQuieresRemlazar!", "PalabraQueRemplaza", varNombre);

substr($varNom, strartIndex, howManyCharacters); crea un subgrid desde strartIndex

matriz
-----------------------------
$nombreMatriz = array(array(x,y,z),array(x,y,z),array(x,y,z),);
echo $nombreMatriz[0][0];
Number operationes
-----------------------

abs($num)-> me devuelve el valor absoluto del numero
pow(2, 3)
sqrt(4);
max(var1, var2);
min(var1, var2);
round(3.2) ->3
ceil(3.2) -> 4
floor(3.9) -> 3


Funciones
---------------------------

function nomFuncion : int(int $var1, $var2){ /* al poner int le decimos que var1 tiene */
        return $var1+$var2;  /*que ser int y los : int significa que quiero que el return*/
}                            /*me devuleva un valor int*/

nomFuncion();

funciones predeterminadas
---------------------------
var_dump($var1) -> nos devuelve informacion de var si es int el numcaracteres y su contenido

print_r($var1) -> nos devuelve el valor de la variable

htmlspecialcharts($var1) -> en caso de que el valor que se pase tenga caracteres especiales
                         estos se convierten en html para eveitar un SQL injection
                         
trim($var1) -> elimina espacios en blanco al inicio y al final

die() -> para la ejecucion de la pagina por completo

Condicionales
---------------------------------

if($var1>$var2){
    .....
} elseif($var1 ==2){
    ......
}else {
    .......
}

<?php if(lo que sea): ?>
    y todo lo que aqui se ejecuta con el if
<?php endif; ?>

$nombre = empty($_GET['nombre']) ? 'anonimo' : $_GET['nombre']; if condicion = true se 
                                    $nombre = anonimo else(?)  $_GET['nombre']

$nombre = $_GET['nombre'] ?? 'anonimo'; si esta $_GET['nombre'] set = $nombre sino anonimo

echo 2 <=> 3 /*te devuelve -1 si es menor 0 si es igual y 1 si es mayor a 3*/
Switch
----------------------------

switch($nomVar){
    case "a": 
        echo "muy bien";
        break;
    case: "b":
        echo "regular";
    default: 
    echo "introuce un valor que sirva"
}

Loops
-------------------------------------

while(i>10) {
    
}

do{
    
}while(i<10);


for($i=0; $i<10; i++){

}

foreach($ArrayGlobal as $variableLocal) {
    
    echo $variableLocal;
}


Operaciones include
-------------------------------------

php modular con compatibilidad HTML
<?php include "header.html" ?> 

php modular con compatibilidad de variables
<?php 
    $varIgualQueModulo1 = 1;
    $varIgualQueModulo2 = 2;
    include "mouduloPHP.php";
    //lo que hace es ejecutar moduloPHP con esas dos variables
    ?>

clases
-----------------------------
defino clase
    class NombreClase {
        public $propiedad1;
        private $propiedad2;
        private $propiedad3;

        function __construct($propiedad11, $propiedad22, $propiedad33){
            $this->propiedad33 = $propiedad3;
            $this->propiedad11 = $propiedad1;
            $this->propiedad22 = $propiedad2;
        }
        
        function nomFuncion($var1, $var2){}
        
        function GetPropiedad1(){ getter
            return $this->propiedad1;
        }
        
        function SetPropiedad2($varQueQuieresIntroducir){
            if($varQueQuieresIntroducir < 1){
                $this->propiedad1 = $varQueQuieresIntroducir;
            } else {
                echo "<h1>hay un error en el texto introducido</h1> ";
            }
        }
    }
    creo objeto
    $EjClase = new NombreClase;
    
    le doy un valor a una propiedad de la clase
    $EjClase->propiedad1 = "valor"; 
    
    Crear y dar un valor a un objeto con un constructor
    $nuevoObjeto = new NombreClase(1,2,3);
    
Defino metodos
$nuevoObjeto->nomFuncion(); o ->nomFuncion()->nomFuncion1()->nomFuncion2()
!!!IMPORTANTE EN EL METODO return .$this

Getter and Setter
    $nuevoobjeto->GetPropiedad1(); getter
    $nuevoObjeto->SetPropiedad2(0.75); setter
    

    Herencia en clases
---------------------------

class NombreClase2 extends NombreClase1 { }


SuperGlobals
$GLOBALS

    $_POST
    $_GET
    
    $_COOKIE -> id del navegador para identificar la pagina
    tiene una fecha limiti de 2 semanas a 1 mes.

    setcookie("nombreC0okie","valor", time()+ 100000) el 100.. es ms
    $var = htmlspecialcharts($_COOKIE['nombreCookie']); -> nos devuelve el valor de la cookie

    $_SESSION -> id del servidor para identificar la pagina
    la sesion id se cirra cuando se cierra el navegador
    la pagina se inicia simepre con session_start();
    $_SESSION['nombreDeLaSesionVariable'] = "id_QueQuieras"
    para cerrar sesion session_start(); session_destroy()


    $_SERVER



FORMULARIO
-----------------------------------------------------------
<html>

<form action="phpDocumento.php" method="GET">
    <input type="text" name="IgualAPHP">
    <input type="submit">
</form>
        
</html>

php
echo $_GET["IgualAPHP"];
echo $_POST["IgualAPHP"]; si fuese form method="POST"
?> 



comprobar el formulario
------------------------
if(isset($_POST['submit'])){ /* si el boton submit esta determinada*/
    $nombre = $_POST['nombre'];
    $correo = $_POST['correo'];
    if(!empty($nombre)){
        $nombre = filter_var($nombre, FILTER_SANITIZER_STRING); !IMPORTANTE
    } else {
        echo '<h1>añade el nombre </h1>'
    }
}

!!!!IMPORTANTE FILTER_SANITIZER_..... Y FILTER_VALIDATE_BOOLEAN


filter_input(INPUT_POST, 'name', FILTER_VALIDATE_EMAIL);





BASE DE DATOS MARIADB CON php
-------------------------------------------------------------

CONECTARSE 

try {
    $Vartiable_conexion = new PDO('mysql:host='localhost;dbname=practica', 'root', '');
} catch(PDOException $error) {
    echo "Error:" . $error->getMessage();
}


CONSULTAS(prepared statements)

$varDondeSeGuarda = $Vartiable_conexion -> prepare('SELECT * FROM TABLA WHERE id = 1');
$varDondeSeGuarda -> execute();

/*el :id es un placeholder de php */
$varDondeSeGuarda = $Vartiable_conexion -> prepare('SELECT * FROM TABLA WHERE id = :id');
$varDondeSeGuarda -> execute( array(':id' => $id) );

$resultado = $varDondeSeGuarda -> fetch();
print_r($$resultado);

fetch (trae solo un objeto) vs fetchAll (trae todos los objetos);

fetch_assoc -> obtener los resultados como array asociativo


TRABAJAR CON ARCHIVOS
-------------------------------

file_exists('documento.txt'); -> nos cumprueba si el documento existe

file_get_contents('document.txt') -> leer archivos

file_put_contents('documento.txt', 'lo que quiero añadir', FILE_APPEND) -> añade texto

file('documento.txt') -> conviete un texto en un array; 

Manejo de rutas

pathinfo('documento.txt', PATHINFO_BASENAME);
pathinfo('documento.txt', PATHINFO_EXTENSION); -> nos permite ver la extension del documento
                                                  introducido

$resultados = glob('*.php');

basename('ydj/xampp/archivo.php');

MYSQLI
------------------------

$varConexion = new mysqli('localhost', 'root', '', 'nomBD', );

if( $varConexion -> connect_errno ) {
    die();
} else {
    $varConexion->set_charset("utf-8");
    $statement = $varConexion->prepare("INSERT INTO tabla(id, nombre, edad) VALUES(?, ?, ?)");
    $statement->bind_param('ssi', $id, $nombre, $edad); /*s string i integer */
    $id = NULL;
    $nombre = $_POST['nombre'];
    $edad = $_POST['edad'];
    $statement-> execute();

}

//Con una base de datos	PHP + AJAX
				
                var peticion = new XMLHtmlRequest();
                peticion.open('POST', 'usuario.php');
                peticion.send(); 

                PREPARO UN PHP PARA QUE DEVUELVA UN JSON
                
                <?php
                    error_reporting(0);
                    header('Content-type: application/json; charset=utf-8');
                                        
                    $varConexion = new mysqli('localhost', 'root', '', 'nomBD', );

                    if( $varConexion -> connect_errno ) {
                        die();
                        
                    } else {
                        $varConexion->set_charset("ut8");
                        $statement = $varConexion->prepare("SELECT * FROM tabla");
                        $statement-> execute();
                        $resultado = $statement->get_result();
                        
                        $dondeGuardoRespuesta = [];

                        while($resultado = $resultado->fetch_assoc ){
                            $creacionArray = [
                                'id' => $resultado['id'],
                                'nombre' => $resultado['nombre'],
                                'apellido' => $resultado['apellido'],
                                'edad' => $resultado['edad']
                            ]

                            array_push($dondeGuardoRespuesta, $creacionArray);
                        }
                    }

                    echo json_encode($dondeGuardoRespuesta);

                ?>


            TRABAJAR CON ARCHIVOS 

            html->

            <form action="direcion.php" method="POST" enctype="multipart/form-data"> enctype sirve para 
                                                      decirle a html que vamos a trabajar con archivos
            <input type="file" name="file">


            php -> 
            
            $archivo = "./img/".basename($_FILES['file']['name']); me devuelve ./img/nombreArchivo.png
            
            $tipoArchivo = strtolower(pathinfo($archivo, PATHINFO_EXTENSION)); .PNG

            $tamaño = getimagesize($_FILE['file']['tmp_name'])

            move_uploaded_file($_FILE["file"]["tmp_name"], $archivo); se envia el arch de temporal a ./img
            
            










            SESSIONES 
        
    if(isset($_SESSION['usuario'])){ comprobamos si E session
        header('Location: ../index.html');
    }

---------------------------COOKIES--------------------------------------
    
    ejemplo de una cookie seria 

    usuario=Yasir ;expires=28/08/2021 ;path=/ ; domain=blog.com

    establecer cookie:

    setcookie('nomberCookie', 'valorCookie', time() + 4800);

    cookie array-> setcookie('nombreC['Y']',$valor[0], time()+3800)

    leer cookie:

    if(isset($_COOKIE['nombreCookie'])){

    } else {
        setcookie(......);
    }

    array Cookies-> $_COOKIE['nombC']['Y']; 

    borrar cookie:

    setcookie('nomberCookie', 'valorCookie', time()-4800);

    setcookie('nomberCookie', '', time() - 4800);

    Ejemplos practicos de cookies
    $nomCookie = date("d/m/Y | H:i:s");


------------------------------SESSION--------------------------------------

    inicializo una session:

    session_start();

    $_SESSION['nombreSession'] = 'Valor';
    
    Leeo una session:

    session_start();
    isset($_SESSION['nombreSession']){ }




------------------------------REST API-------------------------------------
C ->Create con POST, url-> /usuarios
R ->Read con GET, url-> /usuarios/{id}  o /usuarios
U ->Update con PUT, url-> /usuarios/{id}
D ->Delete con DELETE, url-> /usuarios/{id}

PD: el {id} se envia por metodo get pero se devuelve un json
PD: no existe el metodo PUT y DELETE en form html pero puede enviar su
valor por POST al php y se guarda en variables $_PUT $_DELETE
PD: esto se crea en una carpeta llamada api
switch($_SERVER['REQUEST_METHOD']) {
    case 'POST':
        .........OPERACIONES EN OTRA CLASE........;
        ........ OPERACIONES EN LA BASE DE DATOS  .....;
       
    break;
    case 'GET':
        ........ OPERACIONES EN LA BASE DE DATOS  .....;
        $_GET['id']....;
    break;
    case 'PUT':
        ........ OPERACIONES EN LA BASE DE DATOS  .....;
        $_GET['id']....;
    break;
    case 'DELETE':
        ........ OPERACIONES EN LA BASE DE DATOS  .....;
        $_GET['id']....;
    break;
    
}

echo json_encode(.......);