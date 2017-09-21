///<reference path="ajax.ts"/>
function MostrarJSON() {
    var ajax = new Ajax();
    var Recibido;
    ajax.Post("traerAuto.php", function (Res) {
        document.getElementById("divAuto").innerHTML = Res;
        // (<HTMLInputElement>document.getElementById("txtJSON")).innerHTML=Res;
        Recibido = JSON.parse(Res);
        document.getElementById("txtAreaJSON").innerHTML = Recibido.Marca + "\n" +
            Recibido.Precio + "\n" +
            Recibido.Modelo;
        document.getElementById("txtJSON").value = Recibido.Marca;
        console.log(Recibido.Marca);
    });
}
