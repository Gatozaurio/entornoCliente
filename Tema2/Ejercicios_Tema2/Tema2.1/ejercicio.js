//PARA INCLUIR COMENTARIOS
/*
*  PARA INCLUIR VARIAS LINEAS DE COMENTARIOS
*
* */


//ESTE SCRITP ES PARA PRACTICAR LAS DECLARACIONES DE VARIABLES

///esta funcion hay que corregirla para poder porbar las demas
function corregirDeclaraciones(){
    var funcion = new Object();
    var ejemplo = "EJEMPLO";
    var prueba = 123;
    var pruebaEjemplo = "EJERCICIO";
    var prueba = "PRUEBA";
    var prueba2 = "PRUEBA";

    return true;
}
console.log("Corregir funciones: "+ corregirDeclaraciones());

function declararNumeros(){
    const numA = 5;
    const numB = 2;
    return typeof numA === "number"
       && typeof numB === "number"
       && numA > numB;
}
console.log("Declarar numeros: "+ declararNumeros());

function declararString(){
    const cadena = "PRuEbA"
    return cadena === "PRuEbA"
        && typeof cadena === "string";
}
console.log("Declarar String: "+ declararString());

function noDefinido(){
    const x = undefined;
    const y = null;
    return x === undefined
        && y === null;
}
console.log("Declarar no definido: "+ noDefinido());

function declararSymbol(){
    const x = Symbol();
    return typeof x === "symbol";
}
console.log("Declarar symbol: "+ declararSymbol());

function declararFecha(){
    const hoy = new Date();
    return hoy instanceof Date;
}
console.log("Declarar fecha: "+ declararFecha());

function declararExpresionRegular(){
    const expresion = new RegExp();
    return expresion instanceof RegExp;
}
console.log("Declarar expresión regular: "+ declararExpresionRegular());

function declararFuncion(){
    const funcion = new Function();
    return funcion instanceof Function;
}
console.log("Declarar función: "+ declararFuncion());


function declararObjeto(){
    class ObjetoPrueba{};
    const objeto = new ObjetoPrueba();
    return objeto instanceof ObjetoPrueba;
}
console.log("Declarar objeto: "+ declararObjeto());

function declararArray(){
    const lista = ["1","2","3","4","Correcto"];
    return lista instanceof Array
            && lista.length === 5
            && lista[4] === "Correcto";
}
console.log("Declarar array: "+ declararArray());


function declararArrayTipo(){
    const listaEnteros = new Int32Array(10);
    return listaEnteros instanceof Int32Array
            && listaEnteros.length === 10;
}
console.log("Declarar array tipo: "+ declararArrayTipo());

function declararVariableGlobal(){
    const x = "SOY gLOBAL";
    return window.x
            && x === "SOY gLOBAL";
}
console.log("Declarar variable global: "+ declararVariableGlobal());

function declararPrototipo(){
    var __proto__ = new prototipo(prototype);
    return objeto.__proto__ === prototipo.prototype
}
console.log("Declarar prototipo: "+ declararPrototipo());

function declaracionConRetraso(){

    var resultado = y === 35;

    var y = 35;

    return resultado;
}


function declaracionLet(){
    let x = 0;
    if(x > 1){
        let y = "bien";
    }
    return y === "bien";
}

function declaracionConst(){
    const valor = 10;
    valor += 20;
    valor = 30;
    return valor === 30;
}

