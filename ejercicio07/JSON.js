///<reference path="ajax.ts"/>
var ajax = new Ajax();
ajax.Post("traerAuto.php", function (Res) {
    document.getElementById("divAuto").innerHTML = Res;
    alert(Res);
    console.log(Res);
});
