<?php
if(isset($_POST["miProd"]))
{
$recibido=json_decode($_POST["miProd"]);

$prodPHP=new StdClass();
$prodPHP->codigo=$recibido->codigoBarra;
$prodPHP->nombre=$recibido->nombre."php";
$prodPHP->precio=$recibido->precio;

$prodPHPenvio=json_encode($prodPHP);
echo $prodPHPenvio;

}
else
echo "no se recibio nada";