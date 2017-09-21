///<reference path="ajax.ts"/>

let ajax:Ajax=new Ajax();
function Mostrar():void
{
ajax.Post("administrarCiudades.php",(Res:any)=>{

    let lista:any[]=JSON.parse(Res);
    let tabla:string="";
    tabla+="<table border=5><tr><td rowspan=2>Id</td><td rowspan=2>Name</td><td rowspan=2>Country</td><td colspan=2>Coordenadas</td></tr><tr><td>Lon</td><td>Lat</td>";
    for(let i=0;i<lista.length;i++)
        {
            tabla+="<tr><td>"+lista[i]._id+"</td><td>"+lista[i].name+"</td><td>"+lista[i].country+"</td><td>"+lista[i].coord.lon+"</td><td>"+lista[i].coord.lat+"</td></tr>";
        }
        tabla+="</table>";
        (<HTMLDivElement>document.getElementById("divTabla")).innerHTML=tabla;
},"traerCiudades=")
}
