
function ocultarInicio(){
    inicio.style.display="none";
    mostrarAgregar();
}

function mostrarInicio(){
    inicio.style.display="flex";
    ocultarAgregar();
}

function mostrarAgregar(){
    agregar.style.display="flex";    
}

function ocultarAgregar(){
    agregar.style.display="none";    
}


//Selectores
const btnAgregar= document.getElementById('btn-agregar');
const btnCancelar=document.getElementById('cancelar');
const inicio= document.getElementById('inicio');
const agregar=document.getElementById('agregar');


btnAgregar.addEventListener("click", ocultarInicio);
btnCancelar.addEventListener("click", mostrarInicio);