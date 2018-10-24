var canvas = document.getElementById('fondo');
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
fondo.imagen.src = fondo.url;
amarilla.imagen = new Image();
amarilla.imagen.src = amarilla.url;
negra.imagen = new Image();
negra.imagen.src = negra.url;



fondo.imagen.addEventListener("load", function(){
    fondo.cargaOk = true;
    dibujar();
});

amarilla.imagen.addEventListener("load", function(){
    amarilla.cargaOk = true;
    dibujar();
});

negra.imagen.addEventListener("load", function(){
    negra.cargaOk = true;
    dibujar();
});
//200,150
function dibujar() {
    if(fondo.cargaOk == true) {
        lapiz.drawImage(fondo.imagen, 0, 0);
    }
    if(negra.cargaOk == true){
        lapiz.drawImage(negra.imagen, 152, 151)
    }
    if(negra.cargaOk == true){
        lapiz.drawImage(negra.imagen, 202,201)
    }
    if(amarilla.cargaOk == true){
        lapiz.drawImage(amarilla.imagen, 202,151)
    }
    if(amarilla.cargaOk == true){
        lapiz.drawImage(amarilla.imagen, 152,201 )
    }
}