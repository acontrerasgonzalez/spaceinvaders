class Marciano{
    constructor(id,x,y){
        this.marc=document.createElementNS("http://www.w3.org/2000/svg","rect");
        this.id=id;
        this.x=x;
        this.y=y;
        this.vel=50;
        this.colision=false;
        this.marc.setAttribute(("id"),this.id);
        this.marc.setAttribute(("x"),this.x+"px");
        this.marc.setAttribute(("y"),this.y+"px");
        this.marc.setAttribute(("width"),50+"px");
        this.marc.setAttribute(("height"),50+"px");
        document.getElementById("contsvg").appendChild(this.marc);
    }
    /*ya que el movimiento se produce sobre un bloque de marcianos va a ser un metodo de la clase
    juego
    mueve(){//movimiento fijo de 10px si llega al final salta de linea 
        if((this.x+vel)<document.getElementById("contsvg").getAttribute("width")){
            this.x+=vel;
        }else
        if((this.x+vel)>=document.getElementById("contsvg").getAttribute("width")){
            this.y+=50;
            this.cambioDireccion();
        }
    }
    dibuja(){
        var marciano=document.getElementById(this.id);
        marciano.setAttribute(("x"),this.x+"px");
        marciano.setAttribute(("y"),this.y+"px");
    }
    cambioDireccion(){
        this.vel=-this.vel;
    }*/
    dispara(){

    }
    detectaColision(objeto){
        //if(this.x>=objeto.x && this.x+50<=objeto.x){
        //    if(this.y>=objeto.y && this.y+50<=objeto.y){
        //        this.colision=true;
        //    }
        //}
        //ARREGLO
        if(this.x<=objeto.x && this.x+50>=objeto.x){
            if(this.y<=objeto.y && this.y+50>=objeto.y){
                this.colision=true;
            }
             }
    }
}
class Nave{
    constructor(id,x,y){
        this.nave=document.createElementNS("http://www.w3.org/2000/svg","rect");
        this.id=id;
        this.x=x;
        this.y=y;
        this.vel=50;
        this.nave.setAttribute(("id"),this.id);
        this.nave.setAttribute(("x"),this.x+"px");
        this.nave.setAttribute(("y"),this.y+"px");
        this.nave.setAttribute(("width"),150+"px");
        this.nave.setAttribute(("height"),50+"px");
        document.getElementById("contsvg").appendChild(this.nave);
    }
    dispara(){

    }
    moverIzq(){
        //if(this.x-10>=0){
        //    this.x-=10;
        //}
        //ARREGLO
        if(this.x-this.vel>0){
            this.x+=this.vel;
        }else{
            this.vel=-this.vel;
        }
    }
    moverDrch(){
        //if(this.x+150+10<=document.getElementById("contsvg").getAttribute("width")){
        //    this.x+=10;
        //}
        //ARREGLO
        if(this.x+150+this.vel<document.getElementById("contsvg").getAttribute("width")){
            this.x+=this.vel;
        }else{
            this.vel=-this.vel;
        }
    }
    mover(){//se va a mover solo asi que un metodo pa to
        if(this.vel>=0){
            this.moverDrch();
        }else{
            this.moverIzq();
        }
    }
    dibuja(){
        //this.nave.setAttribute(("width"),this.x+"px");
        //this.nave.setAttribute(("height"),this.y+"px");
        //ARREGLO
        this.nave.setAttribute(("x"),this.x+"px");
        this.nave.setAttribute(("y"),this.y+"px");
    }
}
class Disparo{
    constructor(id,x,y,r){
        this.disparo=document.createElementNS("http://www.w3.org/2000/svg","circle");
        this.id=id;
        this.x=x;
        this.y=y;
        this.vel=50;
        this.r=r;
        this.disparo.setAttribute(("id"),this.id);
        this.disparo.setAttribute(("x"),this.x+"px");
        this.disparo.setAttribute(("y"),this.y+"px");
        this.disparo.setAttribute(("r"),this.r);
        this.disparo.setAttribute(("fill"), "red");
        document.getElementById("contsvg").appendChild(this.disparo);
    }
    avanzaArriba(){
        this.y=this.y+this.vel;
        this.disparo.setAttribute(("y"),this.y+"px");
    }
    avanzaAbajo(){
        this.y=this.y-this.vel;
        this.disparo.setAttribute(("y"),this.y+"px");
    }
}
class Juego{
    constructor(){
        this.marcianos=[];
        for(i=0;i<15;i++){
            this.marcianos[i]=new Marciano("marciano"+i,0,0);
            document.getElementById("contenedor").appendChild(this.marcianos[i]);
        }
        this.nave=new Nave("nave",500,800);
        document.getElementById("contenedor").appendChild(this.nave.nave);
    }
    empezar(){
        setInterval(()=>{
            this.nave.mover();           
        },100);
    }
}