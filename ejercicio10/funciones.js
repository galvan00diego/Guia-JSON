///<reference path="ajax.ts"/>
var ajax = new Ajax();
function Mostrar() {
    ajax.Post("administrarCiudades.php", function (Res) {
        var lista = JSON.parse(Res);
        var tabla = "";
        tabla += "<table border=5><tr><td rowspan=2>Id</td><td rowspan=2>Name</td><td rowspan=2>Country</td><td colspan=2>Coordenadas</td></tr><tr><td>Lon</td><td>Lat</td>";
        for (var i = 0; i < lista.length; i++) {
            tabla += "<tr><td>" + lista[i]._id + "</td><td>" + lista[i].name + "</td><td>" + lista[i].country + "</td><td>" + lista[i].coord.lon + "</td><td>" + lista[i].coord.lat + "</td></tr>";
        }
        tabla += "</table>";
        document.getElementById("divTabla").innerHTML = tabla;
    }, "traerCiudades=");
}
