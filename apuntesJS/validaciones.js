document.addEventListener("DOMContentLoaded", function(event) {

    let checkbox = document.getElementById("validaciones");

    checkbox.addEventListener("change", function(event){
        realizarValidaciones(event);
    });

});

function marcarInputCorrecto(input){
    input.classList.remove("invalido");
    input.classList.add("valido");
}

function marcarInputErroneo(input){
    input.classList.remove("valido");
    input.classList.add("invalido");
}

function realizarValidaciones(){
    console.log("hola");
}