var posicionIzq = 150;
var posicionArriba = 150;
var movimiento = 1;
document.onkeydown = function(e){
    console.log(e);
    if (movimiento == 1){
        movimiento = 2;
    }
    else if (movimiento == 2){
        movimiento = 1;
    }
    if(e.keyCode == 37){
        // Izquierda
        posicionIzq = posicionIzq - 25;
        document.getElementById("gatito").style.left = posicionIzq+"px";
        document.getElementById("gatito").style.backgroundImage = "url('img/izq"+movimiento+".png')";
    }
    else if (e.keyCode == 39){
        // Derecha
        posicionIzq = posicionIzq + 25;
        document.getElementById("gatito").style.left = posicionIzq+"px";
        document.getElementById("gatito").style.backgroundImage = "url('img/der"+movimiento+".png')";
    }
    else if (e.keyCode == 38){
        // Arriba
        posicionArriba = posicionArriba - 25;
        document.getElementById("gatito").style.top = posicionArriba+"px";
        document.getElementById("gatito").style.backgroundImage = "url('img/arriba"+movimiento+".png')";

    }
    else if (e.keyCode == 40){
        // Abajo
        posicionArriba = posicionArriba + 25;
        document.getElementById("gatito").style.top = posicionArriba+"px";
        document.getElementById("gatito").style.backgroundImage = "url('img/abajo"+movimiento+".png')";
  }
}