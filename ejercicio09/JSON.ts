///<reference path="ajax.ts"/>

let ajax:Ajax=new Ajax();

function Mostrar():void
{
    ajax.Post("traerAutos.php",(Res:any)=>
{
    let lista:any[]=JSON.parse(Res);
    console.log(lista[0].Marca);
    let tabla:string="";
    tabla+="<table border=5><tr><td>Id</td><td>Marca</td><td>Precio</td><td>Color</td><td>Modelo</td></tr>";
    //(<HTMLDivElement>document.getElementById("div1")).innerHTML+="<table border=5><tr><td>Id</td><td>Marca</td><td>Precio</td><td>Color</td><td>Modelo</td></tr>"+`<tr><td>${lista[0].Id}</td><td>${lista[0].Marca}</td><td>${lista[0].Precio}</td><td>${lista[0].Color}</td><td>${lista[0].Modelo}</td></tr></table>`;
    for(let i=0;i<lista.length;i++)
        {
            tabla+="<tr><td>"+lista[i].Id+"</td><td>"+lista[i].Marca+"</td><td>"+lista[i].Precio+"</td><td>"+lista[i].Color+"</td><td>"+lista[i].Modelo+"</td></tr>";
        }
        tabla+="</table>";
        (<HTMLDivElement>document.getElementById("div1")).innerHTML=tabla;

});
}