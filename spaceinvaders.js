class Marciano{
    constructor(id,x,y){
        this.marc=document.createElementNS("http://www.w3.org/2000/svg","rect");
        this.id=id;
        this.x=x;
        this.y=y;
        this.vel=50;
        this.marc.setAttribute(("id"),this.id);
        this.marc.setAttribute(("x"),this.x+"px");
        this.marc.setAttribute(("y"),this.y+"px");
        this.marc.setAttribute(("width"),50+"px");
        this.marc.setAttribute(("height"),50+"px");
        document.getElementById("contsvg").appendChild(this.marc);
    }
    mueve(){//movimiento fijo de 10px si llega al final salta de linea 
        if((this.x+vel)<document.getElementById("contsvg").getAttribute("width")){
            this.x+=vel;
        }else
        if((this.x+vel)>=document.getElementById("contsvg").getAttribute("width")){
            this.y+=vel;
            this.x=0;
        }
    }
    dibuja(){
        var marciano=document.getElementById(this.id);
        marciano.setAttribute(("x"),this.x+"px");
        marciano.setAttribute(("y"),this.y+"px");
    }
    dispara(){

    }
    cambioDireccion(){
        this.vel=-this.vel;
    }
}