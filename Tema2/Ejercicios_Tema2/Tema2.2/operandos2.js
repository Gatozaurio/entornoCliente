function concatenarCadenas(){

    let clase = 2017;
    let x = "ALUMNO";
    let y = "DAW";
    const resultado = `${x}_${y}_${clase}`;

    return resultado === "ALUMNO_DAW_2017";
}
console.log(`Concatenar: ${concatenarCadenas()}`);

function operadorTernario(){

    let x = 0;
    let y = 0;
    const resultado = x===y ? true : false;

    return resultado;
}
console.log(`Ternario: ${operadorTernario()}`);

function deleteArray(){

    let array = [1,2,3,4,5,6,7,8,9,10];
    delete(array[9]);

    return array[9] === undefined;
}
console.log(`Delete array: ${deleteArray()}`);

function crearArray(){

    let x = [
        1.5,
        "ALUMNOS",
        new Date(),
        5,
        new Date(),
        undefined,
        null
    ];

    return  x[0] ===  1.5
        && x[1] ===  "ALUMNOS"
        && x[2] instanceof Date
        && typeof x[3] === "number"
        && typeof x[4] === "object"
        && x[5] === undefined
        && x[6] === null;
}
console.log(`Crear array: ${crearArray()}`);

function existeElemento(){

    let x = {prueba1:"prueba1", prueba2:"prueba2"};

    return "prueba1" in x && "prueba2" in x;

}
console.log(`Existe elemento: ${existeElemento()}`);