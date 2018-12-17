function comprobarNombre(event){
    let regEx = /^[a-zA-Z]+$/;
    let nombreProyecto = document.getElementById("nombreProyecto");
    regEx.test(nombreProyecto);
    
}