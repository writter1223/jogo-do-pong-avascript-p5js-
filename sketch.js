let xBolinha = 300;
let yBolinha = 200;
let diametro = 17;
let raio = diametro/2;
let meusPontos = 0;
let pontosdoOponente = 0;

let xraquete = 3;
let yraquete = 150;
let raqueteComprim = 10;
let raqueteAltura = 100;

 let xraquete2 = 587
 let yraquete2 = 150
 let raqueteComprim2 = 10
 let raqueteAltura2 = 100
 
let velocidadeXBolinha = 5;
let velocidadeYBolinha = 5;
 
function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  circle(xBolinha,yBolinha,diametro);
 
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
 
  if(xBolinha + raio > width || xBolinha -raio<0){velocidadeXBolinha *=-1}
 
  if(yBolinha + raio> height || yBolinha -raio<0 )
   
{velocidadeYBolinha *=-1}
 
 rect(xraquete, yraquete, raqueteComprim, raqueteAltura);
  rect(xraquete2, yraquete2, raqueteComprim2, raqueteAltura2)


 if(keyIsDown(87)){yraquete -= 5;}

 if(keyIsDown(83)){yraquete += 5;}
 
  if(xBolinha - raio < xraquete + raqueteComprim && yBolinha - raio < yraquete + raqueteAltura && yBolinha + raio > yraquete){ velocidadeXBolinha *=-1;}
 
 if (keyIsDown(UP_ARROW)){yraquete2 -=5;}

 if (keyIsDown(DOWN_ARROW)){yraquete2 +=5;}

 
 if(xBolinha + raio > xraquete2 - raqueteComprim && yBolinha - raio < yraquete2 + raqueteAltura && yBolinha + raio > yraquete2){ velocidadeXBolinha *=-1;}
 
text(meusPontos,150,25);
text(pontosdoOponente,450,25);
fill(255);
textSize(30);
 if(xBolinha >590){meusPontos +=1;}
 if(xBolinha <10){pontosdoOponente +=1;}
 
}
