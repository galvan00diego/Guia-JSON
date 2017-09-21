var Ajax = /** @class */ (function () {
    function Ajax() {
        var _this = this;
        this.Get = function (ruta, success, params, error) {
            if (params === void 0) { params = ""; }
            var parametros = params.length > 0 ? params : "";
            ruta = params.length > 0 ? ruta + "?" + parametros : ruta;
            _this._xhr.open('GET', ruta);
            _this._xhr.send();
            _this._xhr.onreadystatechange = function () {
                if (_this._xhr.readyState === Ajax.DONE) {
                    if (_this._xhr.status === Ajax.OK) {
                        success(_this._xhr.responseText);
                    }
                    else {
                        if (error !== undefined) {
                            error(_this._xhr.status);
                        }
                    }
                }
            };
        };
        this.Post = function (ruta, success, params, error) {
            if (params === void 0) { params = ""; }
            var parametros = params.length > 0 ? params : "";
            _this._xhr.open('POST', ruta, true);
            _this._xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
            _this._xhr.send(parametros);
            _this._xhr.onreadystatechange = function () {
                if (_this._xhr.readyState === Ajax.DONE) {
                    if (_this._xhr.status === Ajax.OK) {
                        success(_this._xhr.responseText);
                    }
                    else {
                        if (error !== undefined) {
                            error(_this._xhr.status);
                        }
                    }
                }
            };
        };
        this._xhr = new XMLHttpRequest();
        Ajax.DONE = 4;
        Ajax.OK = 200;
    }
    return Ajax;
}());
///<reference path="./ajax.ts"/>
var productos = [{ "codigoBarra": 1, "nombre": "Tomate", "precio": 15 },
    { "codigoBarra": 2, "nombre": "Pera", "precio": 23 },
    { "codigoBarra": 3, "nombre": "Lechuga", "precio": 266 }];
var str = JSON.stringify(productos);
var Envio = new Ajax();
Envio.Post("recibirJSON.php", function (Res) {
    var lista = JSON.parse(Res);
    var tabla = "<table border=3><tr><td>Codigo de Barra</td><td>Nombre</td><td>Precio</td>";
    for (var i = 0; i < lista.length; i++) {
        tabla += "<tr><td>" + lista[i].codigoBarra + "</td><td>" + lista[i].nombre + "</td><td>" + lista[i].precio + "</td></tr>";
    }
    tabla += "</table>";
    document.getElementById("div1").innerHTML = tabla;
}, "miListaProd=" + str);
