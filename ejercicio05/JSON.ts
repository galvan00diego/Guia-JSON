///<reference path="ajax.ts"/>
var productos:any={"codigoBarra":1,"nombre":"producto1","precio":15};
//alert(productos.codigoBarra+"\n"+productos.nombre+"\n"+productos.precio);
//console.log(productos.codigoBarra+"\n"+productos.nombre+"\n"+productos.precio);

var str=JSON.stringify(productos);

var Envio:Ajax=new Ajax();
Envio.Post("recibirJSON.php",(Res:string)=> {
    (<HTMLDivElement>document.getElementById("div1")).innerHTML = Res;
                    alert(JSON.parse(Res));
                    console.log(JSON.parse(Res));
                    var prod:any=JSON.parse(Res);
                    console.log(prod.codigo);
                },"miProd="+str,);
