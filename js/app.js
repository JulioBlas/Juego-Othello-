var canvas = document.getElementById('tablero');
var lapiz = canvas.getContext('2d');
const DIMENSION = 50;
var x = 0;
var y = 0;
var matriz = new Array(8);

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

fondo.imagen = new Image();
amarilla.imagen = new Image();
negra.imagen = new Image();
fondo.imagen.src = fondo.url;
amarilla.imagen.src = amarilla.url;
negra.imagen.src = negra.url;

fondo.imagen.addEventListener("load", function(){
    fondo.cargaOk = true;
    dibujar();
});

amarilla.imagen.addEventListener("load", function(){
    amarilla.cargaOk = true;
});

negra.imagen.addEventListener("load", function(){
    negra.cargaOk = true;
});

function dibujar() {
    if (fondo.cargaOk == true) {
        lapiz.drawImage(fondo.imagen, 0, 0);
    }
}