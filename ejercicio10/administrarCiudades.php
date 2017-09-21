<?php

$archivoJSON=fopen("city.list.min.json","r");
$array=array();
while(!feof($archivoJSON))
{
array_push($array,json_decode(fgets($archivoJSON)));
}
array_filter($array);

$envio=json_encode(array_filter($array));
echo $envio;
// while(!feof($archivoJSON))
// {
// $str.=fgetss($archivoJSON);
// $str.=",";
// }
// $str = (substr ($str, 0, strlen($str) - 2))."]";
// echo $str;
