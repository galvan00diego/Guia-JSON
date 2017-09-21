///<reference path="ajax.ts"/>

let ajax:Ajax=new Ajax();

ajax.Post("traerAuto.php",(Res:string)=>
{
    (<HTMLDivElement>document.getElementById("divAuto")).innerHTML=Res;
    alert(Res);
    console.log(Res);
});