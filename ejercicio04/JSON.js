///<reference path="ajax.ts"/>
var productos = [{ "codigoBarra": 1, "nombre": "producto1", "precio": 15 },
    { "codigoBarra": 2, "nombre": "producto2", "precio": 150 },
    { "codigoBarra": 3, "nombre": "producto3", "precio": 64 }];
// alert(productos.codigoBarra+"\n"+productos.nombre+"\n"+productos.precio);
// console.log(productos.codigoBarra+"\n"+productos.nombre+"\n"+productos.precio);
var ajax = new Ajax();
ajax.Post("mostrarColeccionJson.php", function (Res) {
    document.getElementById("div1").innerHTML = Res;
    console.log(Res);
}, "miColeccion=" + JSON.stringify(productos));
