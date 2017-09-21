///<reference path="ajax.ts"/>
function MostrarJSON():void
{
let ajax:Ajax=new Ajax();
let Recibido:any;
ajax.Post("traerAuto.php",(Res:string)=>
{
    (<HTMLDivElement>document.getElementById("divAuto")).innerHTML=Res;
   // (<HTMLInputElement>document.getElementById("txtJSON")).innerHTML=Res;
    Recibido=JSON.parse(Res);
    (<HTMLTextAreaElement>document.getElementById("txtAreaJSON")).innerHTML=Recibido.Marca+"\n"+
                                                                        Recibido.Precio+"\n"+
                                                                        Recibido.Modelo;
    (<HTMLInputElement>document.getElementById("txtJSON")).value=Recibido.Marca
    console.log(Recibido.Marca);
});
}