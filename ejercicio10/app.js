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
