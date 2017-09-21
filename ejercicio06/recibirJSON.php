<?php
if(isset($_POST["miListaProd"]))
{
$recibido=json_decode($_POST["miListaProd"]);
//var_dump($recibido);
//$prodPHP[]=new stdClass();
//var_dump($prodPHP);
// for($i=0;$i<count($recibido);$i++)
// {
// $prodPHP[$i]->codigo=$recibido[$i]->codigoBarra;
// $prodPHP[$i]->nombre=$recibido[$i]->nombre;
// $prodPHP[$i]->precio=$recibido[$i]->precio;
// }
$prodPHPenvio=json_encode($recibido);
//var_dump($prodPHPenvio);
echo $prodPHPenvio;

}
else
echo "no se recibio nada";