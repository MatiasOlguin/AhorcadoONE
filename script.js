function ocultarInicio(){
    inicio.style.display="none";
}

function mostrarInicio(){
    inicio.style.display="flex";
}

function mostrarJuego(){
    juego.style.display="flex";
    ocultarInicio();
}


function mostrarAgregar(){
    agregar.style.display="flex";
    ocultarInicio();   
}

function ocultarAgregar(){
    agregar.style.display="none";
    mostrarInicio();  
}

function retornarAleatorio(maximo){
    return Math.floor((Math.random()*maximo));
}

function retornarPalabraAleatoria(palabras){
    return palabras[retornarAleatorio(palabras.length)];
}

function insertarPalabra(palabra, palabraSecreta){
    for(i=0;i<palabra.length;i++){
        var letra=document.createElement("li");
        letra.textContent=palabra[i];
        letra.className=palabra[i];
        palabraSecreta.appendChild(letra);
    }
}

let palabras=["HTML", "CSS", "JAVA"];
let palabra= retornarPalabraAleatoria(palabras);
let contadorAciertos=0;


//Selectores
const btnInicio=document.getElementById('btn-inicio');
const btnAgregar= document.getElementById('btn-agregar');
const btnCancelar=document.getElementById('btn-cancelar');
const inicio= document.getElementById('inicio');
const juego=document.getElementById('juego');
const palabraSecreta=document.getElementById('palabra-secreta');
const agregar=document.getElementById('agregar');

insertarPalabra(palabra,palabraSecreta);

btnInicio.addEventListener("click", mostrarJuego);
btnAgregar.addEventListener("click", mostrarAgregar);
btnCancelar.addEventListener("click", ocultarAgregar);


document.addEventListener('keydown', (event) => {
    var keyValue = (event.key).toString();
    keyValue= keyValue.toUpperCase();
    console.log(keyValue);
    var nodos=palabraSecreta.childNodes;
    
    for (var i = 0; i < nodos.length; i++) {
        if(nodos[i].textContent == keyValue && juego.style.display == "flex"){
           nodos[i].style.color="#0A3871";
           contadorAciertos++;
           if(contadorAciertos == palabra.length){
                console.log("Ganaste!");
           }
        }
    }

  }, false);