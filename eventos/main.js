let div = document.getElementsByClassName("fml")[0];
div.addEventListener("click", sacarCoordenadas(event));

function sacarCoordenadas(event){
    console.log(`Coordenadas: ${event.clientX}x ${event.clientX}y`);
}