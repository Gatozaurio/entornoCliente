document.addEventListener(
    'DOMContentLoaded',
    function(event){
        document.body.innerHTML = liga01.toString();
        document.body.innerHTML += liga02.toString();
        crearInput();
    }
);

function crearInput(){
    let input = document.createElement('input');
    input.type = 'text';
    document.body.appendChild(input);
    input.addEventListener( // Crea un evento a cambiar el foco del input
        'change',
        function(event){
            let valor = event.target.value; // Guarda el contenido del input
            valor = valor.trim(); // Hay que hacer trim siempre que se recojan valores de un input
            aplicarFiltro(valor);
        }
    );
}

function aplicarFiltro(entrada){
    let divPadre = document.createElement('div');
    divPadre.class = 'padre';
    let h1titulo = document.createElement('h1');
    h1titulo.append('Filtrado de equipos.');
    divPadre.appendChild(h1titulo);
    document.body.appendChild(divPadre);
}