<?php

$path="auto.json";
function LeerArchivo($p)
{
    $miArch=fopen($p,"r");
    $retorno=fread($miArch,filesize($p));
    // while(!feof($miArch))
    // {
    //     echo fgets($miArch,filesize($p))."<br>";
    // }
     fclose($miArch);
     return $retorno;
}
echo LeerArchivo($path);
