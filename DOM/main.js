function mostrarNombre(){
    let inputNombre = document.getElementsByName("Manolo")[0];
    console.log(inputNombre.value);
}

function mostrarNombresForOf(){ // For of - Funciona bien
    let inputNombre = document.getElementsByName("Manolo");
    for(const key of inputNombre){
        console.log(key.value);
    }
}

function mostrarNombresForIn(){ // For in - Va a mostrar valores que no hacen referencia a los input

}

function mostrarInputs(){
    var inputNombre = document.querySelectorAll("Manolo");
    inputNombre.forEach(key => console.log(key));
}