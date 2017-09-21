<?php

$miColeccion=json_decode($_POST["miColeccion"]);

echo "<table border=4>";
echo "<tr><td>Codigo</td><td>Nombre</td><td>Precio</td></tr>";
for($i=0;$i<count($miColeccion);$i++)
{
echo "<tr><td><br>".$miColeccion[$i]->codigoBarra."</td>";
echo "<td>".$miColeccion[$i]->nombre."</td>";
echo "<td>".$miColeccion[$i]->precio."<br></td></tr>";
}