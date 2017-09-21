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
///<reference path="ajax.ts"/>
var ajax = new Ajax();
function Mostrar() {
    ajax.Post("traerAutos.php", function (Res) {
        var lista = JSON.parse(Res);
        console.log(lista[0].Marca);
        var tabla = "";
        tabla += "<table border=5><tr><td>Id</td><td>Marca</td><td>Precio</td><td>Color</td><td>Modelo</td></tr>";
        //(<HTMLDivElement>document.getElementById("div1")).innerHTML+="<table border=5><tr><td>Id</td><td>Marca</td><td>Precio</td><td>Color</td><td>Modelo</td></tr>"+`<tr><td>${lista[0].Id}</td><td>${lista[0].Marca}</td><td>${lista[0].Precio}</td><td>${lista[0].Color}</td><td>${lista[0].Modelo}</td></tr></table>`;
        for (var i = 0; i < lista.length; i++) {
            tabla += "<tr><td>" + lista[i].Id + "</td><td>" + lista[i].Marca + "</td><td>" + lista[i].Precio + "</td><td>" + lista[i].Color + "</td><td>" + lista[i].Modelo + "</td></tr>";
        }
        tabla += "</table>";
        document.getElementById("div1").innerHTML = tabla;
    });
}
