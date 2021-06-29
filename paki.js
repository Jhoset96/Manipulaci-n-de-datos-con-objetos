var imagenes = [];
imagenes["cauchin"]= "vaca.png";
imagenes["pocachu"]= "pollo.png";
imagenes["tocinaurio"]= "cerdo.png";

class pakiman {
  constructor(n,v,a){
    this.imagen = new Image();
    this.nombre = n;
    this.vida = v;
    this.ataque = a;
    this.imagen.src = imagenes[this.nombre];
  }
  hablar () {
    alert(this.nombre);
  }
  mostrar(){
    document.write("<p>");
    document.body.appendChild(this.imagen);
    document.write("<strong>"+ this.nombre + "</strong></br>");
    document.write("Vida: " + this.vida + "</br>");
    document.write("Ataque: " + this.ataque + "</br>" + "<hr />");
    document.write("</p>");
  }
}

var pocachu = new pakiman("pocachu" ,100,30);
var cauchin = new pakiman("cauchin",50,50);
var tocinaurio = new pakiman ("tocinaurio", 30,80);

cauchin.mostrar();
pocachu.mostrar();
tocinaurio.mostrar();

document.write("</p>");
document.write("</p>");
document.write("</p>");
document.write("</p>");
document.write("</p>");
document.write("</p>");
document.write("</p>");
document.write("</p>");



var coleccion = [];
coleccion.push(new pakiman("pocachu" ,100,30));
coleccion.push(new pakiman("cauchin",50,50));
coleccion.push(new pakiman ("tocinaurio", 30,80));

for (var jhoset of coleccion){
  jhoset.mostrar();
}
