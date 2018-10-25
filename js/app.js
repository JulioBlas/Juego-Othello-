document.addEventListener("keydown", movimiento);
var canvas = document.getElementById('fondo');
var lapiz = canvas.getContext('2d');

const DIMENSION = 50;
var x = 0;
var y = 0;
var matriz = new Array(8);
var jugador = false; //true = amarillo o si es false = negro

var fondo = {
    url: './Imagenes/Tablero.png',
    imagen: Image,
    cargaOk : false
};

var amarilla = {
    url: './Imagenes/Amarilla.png',
    imagen: Image,
    cargaOk: false
};

var negra = {
    url: './Imagenes/Negra.png',
    imagen: Image,
    cargaOk: false
};

var tecla = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    ENTER: 13
}

function iniciarMatriz() {
    for (var i = 0; i < matriz.length; i++) {
        matriz[i] = new Array(8);
        for (var j = 0; j < matriz.length; j++) {
            matriz[i][j] = 'x';
        }
    }
}

function movimiento(evento){
    switch(evento.keyCode){
        case tecla.LEFT:
            if(x > 0){
                x = x - DIMENSION;
            }
            
            break;
        case tecla.UP:
            if (y > 0){
                y = y - DIMENSION;
            }
            
            break;
        case tecla.RIGHT:
             if(x < 400){
                 x = x + DIMENSION;
             }
             
             break; 
        case tecla.DOWN:
             if(y < 400){
             y = y + DIMENSION;
             }
             
             break;    
        case tecla.ENTER:       
            jugador = true;
            if(matriz[x/DIMENSION][y/DIMENSION] == 'x' && jugador == true){
                matriz[x/DIMENSION][y/DIMENSION] = 'a'   ;         
            }    
    }
 }

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
amarilla.imagen = new Image();
amarilla.imagen.src = amarilla.url;
negra.imagen = new Image();
negra.imagen.src = negra.url;



fondo.imagen.addEventListener("load", function(){
    fondo.cargaOk = true;
    
});
   

function pintarTablero(){
    if(fondo.cargaOk == true) {
        lapiz.drawImage(fondo.imagen, 0, 0);
     }
};

function fichasIniciales(){
    matriz[3][3] = 'a';
    matriz[3][4] = 'n';
    matriz[4][4] = 'a';
    matriz[4][3] = 'n';
};

function pintarFichas(){
    for (var i = 0; i < matriz.length; i++) {
        for (var j = 0; j < matriz.length; j++) {
            if (matriz[i][j] == 'a') {
                lapiz.drawImage(amarilla.imagen, j * DIMENSION, i * DIMENSION);
            } else if (matriz[i][j] == 'n') {
                lapiz.drawImage(negra.imagen, j  * DIMENSION, i * DIMENSION);
            }else {

            }
        }
    }
};

function jugando(){
    if (jugador = false){
        lapiz.drawImage(amarilla.imagen,x,y )
        jugador = true
    }else{
        lapiz.drawImage(negra.imagen,x,y)
        jugador = false
    }
}


addEventListener("load", function(){
    pintarTablero();
     
    jugando();
    iniciarMatriz();
    fichasIniciales();
})