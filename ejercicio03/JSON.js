///<reference path="ajax.ts"/>
var productos = { "codigoBarra": 1, "nombre": "producto1", "precio": 15 };
//alert(productos.codigoBarra+"\n"+productos.nombre+"\n"+productos.precio);
//console.log(productos.codigoBarra+"\n"+productos.nombre+"\n"+productos.precio);
var str = JSON.stringify(productos);
var Envio = new Ajax();
Envio.Post("mostraJson.php", function (Res) {
    document.getElementById("div1").innerHTML = Res;
    alert(Res);
    console.log(Res);
}, "miProd=" + str);
