<?php

$recibido=json_decode($_POST["miProd"]);

var_dump($recibido);
$recibido->codigoBarra=154;
$recibido->nombre="cambioNombre";
$recibido->precio=4053;

var_dump($recibido);