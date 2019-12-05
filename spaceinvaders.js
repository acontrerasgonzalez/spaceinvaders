class Marciano{
    constructor(id,x,y){
        this.marc=document.createElementNS("http://www.w3.org/2000/svg","rect");
        this.id=id;
        this.x=x;
        this.y=y;
        this.vel=50;
        this.colision=false;
        this.maxtamx=document.getElementById("contenedor").getAttribute("width");
        this.maxtamx=this.maxtamx.replace("px","");
        this.marc.setAttribute(("id"),this.id);
        this.marc.setAttribute(("x"),this.x+"px");
        this.marc.setAttribute(("y"),this.y+"px");
        this.marc.setAttribute(("fill"),"green");
        this.marc.setAttribute(("width"),50+"px");
        this.marc.setAttribute(("height"),50+"px");
    }
    /*ya que el movimiento se produce sobre un bloque de marcianos va a ser un metodo de la clase
    juego*/
    mueve(){//movimiento fijo de 10px si llega al final salta de linea 
        if((this.x+this.vel+50)<=this.maxtamx/*document.getElementById("contenedor").getAttribute("width")*/){
            this.x+=this.vel;
        }else
        if((this.x+this.vel)+50>=this.maxtamx/*document.getElementById("contenedor").getAttribute("width")*/){
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
    }
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
        this.vel=20;
        this.nave.setAttribute(("id"),this.id);
        this.nave.setAttribute(("x"),this.x+"px");
        this.nave.setAttribute(("y"),this.y+"px");
        this.nave.setAttribute(("fill"),"blue");
        this.nave.setAttribute(("width"),140+"px");
        this.nave.setAttribute(("height"),50+"px");
    }
    dispara(){

    }
    moverIzq(){
        //if(this.x-10>=0){
        //    this.x-=10;
        //}
        //ARREGLO
        if(this.x-this.vel>=0){
            this.x-=this.vel;
        }
    }
    moverDrch(){
        //if(this.x+150+10<=document.getElementById("contsvg").getAttribute("width")){
        //    this.x+=10;
        //}
        //ARREGLO
        if(this.x+140+this.vel<=800/*(document.getElementById("contenedor").getAttribute("width"))*/){
            this.x+=this.vel;
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
    detectaColision(objeto){
        //if(this.x>=objeto.x && this.x+50<=objeto.x){
        //    if(this.y>=objeto.y && this.y+50<=objeto.y){
        //        this.colision=true;
        //    }
        //}
        //ARREGLO
        if(this.x<=objeto.x && this.x+150>=objeto.x){
            if(this.y<=objeto.y && this.y+50>=objeto.y){
                this.colision=true;
            }
        }
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
    constructor(contenedor){
        this.marcianos=[];
        this.ax=50;
        this.ay=50;
        var cont=0;
        for(var i=0;i<3;i++){
            for(var j=0;j<5;j++){
                this.marcianos[cont]=new Marciano("marciano"+cont,this.ax,this.ay);
                document.getElementById(contenedor).appendChild(this.marcianos[cont].marc);
                this.ax+=70;
                cont++;
            }
            this.ay+=70;
            this.ax=50;
        }
        this.nave=new Nave("nave",500,720);
        this.nave.dibuja();
        document.getElementById(contenedor).appendChild(this.nave.nave);
        document.body.addEventListener("keydown",(event)=>{
            if(event.keyCode==37){
                this.nave.moverIzq();
                this.nave.dibuja();
            }else if(event.keyCode==39){
                this.nave.moverDrch();
                this.nave.dibuja();
            }
        })
    }
    empezar(){
        setInterval(()=>{
            for(var i=0;i<this.marcianos.length;i++){
                if((this.marcianos[i].x+this.marcianos[i].vel+50)<=this.marcianos[i].maxtamx/*document.getElementById("contenedor").getAttribute("width")*/){
                    this.marcianos[i].x+=this.marcianos[i].vel;
                }else
                if((this.marcianos[i].x+this.marcianos[i].vel)+50>=this.marcianos[i].maxtamx/*document.getElementById("contenedor").getAttribute("width")*/){      
                    for(var j=0;j<this.marcianos.length;j++){
                        this.marcianos[j].y+=50;
                        this.marcianos[j].vel=-this.marcianos[j].vel;
                }
                }
                if((this.marcianos[i].x+this.marcianos[i].vel)>=0/*document.getElementById("contenedor").getAttribute("width")*/){
                    this.marcianos[i].x+=this.marcianos[i].vel;
                }else
                if((this.marcianos[i].x+this.marcianos[i].vel)<=0/*document.getElementById("contenedor").getAttribute("width")*/){            
                    for(var j=0;j<this.marcianos.length;j++){
                        this.marcianos[j].y+=50;
                        this.marcianos[j].vel=-this.marcianos[j].vel;
                }
                }
                this.marcianos[i].dibuja();
            }
        },500);
    }
}
var juego = new Juego("contenedor");
juego.empezar();