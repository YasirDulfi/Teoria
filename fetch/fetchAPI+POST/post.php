<?php

$usuario = $_POST['usuario'];
$contrasenia = $_POST['constrasenia'];

if($usuario!='' && $contrasenia!=''){
    echo json_encode('todo correcto!')
}