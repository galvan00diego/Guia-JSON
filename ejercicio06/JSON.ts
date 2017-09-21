///<reference path="./ajax.ts"/>

var productos:any=[{"codigoBarra":1,"nombre":"Tomate","precio":15},
                   {"codigoBarra":2,"nombre":"Pera","precio":23},
                   {"codigoBarra":3,"nombre":"Lechuga","precio":266}];


var str=JSON.stringify(productos);

var Envio:Ajax=new Ajax();
Envio.Post("recibirJSON.php",(Res:any)=> {
        let lista:any[]=JSON.parse(Res);
        let tabla:string="<table border=3><tr><td>Codigo de Barra</td><td>Nombre</td><td>Precio</td>";
        for(let i=0;i<lista.length;i++)
            {
                tabla+="<tr><td>"+lista[i].codigoBarra+"</td><td>"+lista[i].nombre+"</td><td>"+lista[i].precio+"</td></tr>";
            }
            tabla+="</table>";
(<HTMLDivElement>document.getElementById("div1")).innerHTML = tabla;
                },"miListaProd="+str,);
