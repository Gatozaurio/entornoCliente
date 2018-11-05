// EJERCICIOS CON LOS OPERANDOS

function asignacionDeValoresSumar(){

    let x = 2;
    let y = 1;
    x+=y;

    return x === 3;
}
// debugger;
console.log("Sumar: " + asignacionDeValoresSumar());


function asignacionDeValoresRestar(){

    let x = 10;
    let y = 5;
    x-=y;

    return x === 5;
}
console.log("Restar: " + asignacionDeValoresRestar());

function asignacionDeValoresMultiplicacion(){

    let x = 7;
    let y = 5;
    x*=y;

    return x === 35;
}
console.log("Multiplicar: " + asignacionDeValoresMultiplicacion());

function asignacionDeValoresResto(){

    let x = 26;
    let y = 25;
    x%=y;

    return x === 1;
}
console.log("Resto: " + asignacionDeValoresResto());

function comparacionIgualdad(){

    let x = undefined;
    let y = null;

    resultado = x == y;

    return resultado;
}
console.log("Igualdad: " + comparacionIgualdad());

function comparacionIgualdadEstricto(){

    let x = undefined;
    let y = undefined;

    resultado = x === y;

    return resultado;
}
console.log("Igualdad estricto: " + comparacionIgualdadEstricto());

function comparacionMayorIgual(){

    let x = 5;
    let y = 0;

    resultado = x >= y;

    return resultado;
}
console.log("Mayor igual: " + comparacionMayorIgual());


function incremento(){

    let x = 4;
    ++x;

    return x === 5;
}
console.log("Incremento: " + incremento());


function decremento(){

    let x = 6;
    --x;

    return x === 5;
}
console.log("Decremento: " + decremento());


function igualdadIncremento(){

    let x = 5;

    return x++ === 5;
}
console.log("Igualdad incremento: " + igualdadIncremento());

function comparacionAND(){
    var x = "";
    var y = "";
    const resultado = x === "" && y === "";

    return resultado;
}
console.log("AND: " + comparacionAND());

function comparacionOR(){
    var x = "";
    var y = "w";
    const resultado = x === "" || y === "";

    return resultado;
}
console.log("OR: " + comparacionOR());

function comparacionNOT(){
    var x = "";
    const resutlado = x!= "hola";
    return resultado;
}
console.log("NOT: " + comparacionNOT());
