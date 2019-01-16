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
    input.addEventListener('blur',function(event){
        let valor = event.target.value;
        valor = valor.trim();
        validarInput(input, valor);
    });
}

function aplicarFiltro(valor){
    let divPadre = document.createElement('div');
    let h1titulo = document.createElement('h1');
    h1titulo.innerHTML = 'Equipos filtrados';
    divPadre.appendChild(h1titulo);
    todasLasLigas.forEach(liga =>
        liga.equipos.forEach(equipo => mostrarEquipo(equipo, divPadre, valor)
        )
    )
    document.body.appendChild(divPadre);
}

function mostrarEquipo(equipo, div, valor){
    if(equipo.nombre.includes(valor)){
        let div2= document.createElement('div');
        div2.innerHTML = equipo.nombre;
        div.appendChild(div2);
    }
}

function validarInput(input, valor){
    let expr1 = /^[A-Za-z]+$/;
    let expr2 = /^[A-Z]+$/;
    let esCorrectoTodoLetras = expr1.test(valor);
    let esCorrectoSoloMay = expr2.test(valor);
    let esCorrectoTam = valor.length >= 5;
    let divConErrores = document.getElementById('divErroresInput');
    if(divConErrores == null){
        divConErrores = document.createElement('div');
        divConErrores.id = 'divErroresInput';
    }else{
        divConErrores.innerHTML = '';
    }
    input.nextElementSibling = divConErrores;
    if(esCorrectoTodoLetras){
        let span = document.createElement('span');
        span.innerHTML = 'Solo se permiten letras';
        divConErrores.appendChild(span);
    }
    // resetearEstiloInput();
    if(esCorrectoTodoLetras && esCorrectoSoloMay && esCorrectoTam){
        input.classList.add('inputCorrecto');
    }else{
        input.classList.add('inputIncorrecto');
    }
}