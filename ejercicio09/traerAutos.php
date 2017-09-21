<?php

$archivo=fopen("autos.json","r");
$listado=fread($archivo,filesize("autos.json"));


echo $listado;