let uri="https://pruebas.com/myPrueba.asp?name=jorge&apellido=baron";

// Decodifica la URI
console.log(decodeURI(uri));

// Codifica la uri
console.log(decodeURI(uri));

function sumarString (cadena){
    let arrayFrase = cadena.split(' ');
    let suma = 0;
    for (let palabra of arrayFrase){
        if (isFinite(palabra)){
            suma+=parseInt(palabra);
        }
    }
    return suma;
}
console.log(sumarString("Hola 2 caracola que disen los 4 tios"));