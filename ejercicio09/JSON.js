///<reference path="ajax.ts"/>
var ajax = new Ajax();
function Mostrar() {
    ajax.Post("traerAutos.php", function (Res) {
        var lista = JSON.parse(Res);
        console.log(lista[0].Marca);
        document.getElementById("div1").innerHTML += "<table border=3><tr><td>Id</td><td>Marca</td><td>Precio</td><td>Color</td><td>Modelo</td></tr>";
        for (var i = 0; i < lista.length; i++) {
            document.getElementById("div1").innerHTML += "<tr><td>" + lista[i].Id + "</td><td>" + lista[i].Marca + "</td><td>" + lista[i].Precio + "</td><td>" + lista[i].Color + "</td><td>" + lista[i].Modelo + "</td></tr>";
        }
        document.getElementById("div1").innerHTML += "</table>";
    });
}
