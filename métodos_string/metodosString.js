const frase = 'Esta Clase Seria una Maravilla si fuera de dia,ahora prefiero echar una Siestecilla';
console.log(frase.charAt(2)); // t

 // El unicode de la E y la e es distinto:
console.log(frase.charCodeAt(0)); // Unicode: 69
console.log(frase.charCodeAt(10)); // Unicode: 32

console.log(frase.includes('Clase', 0)); // True
console.log(frase.includes('Clase', 20)); // False

// Devuelve la posición de la primera ocurrencia
console.log(frase.indexOf('Clase', 0)); // 5
console.log(frase.indexOf('Clase', 20)); // -1

console.log(frase.repeat(2)); // Devuelve 2 veces la frase

console.log(frase.replace('illa', 'ita')); // Reemplaza el primer illa por ita

console.log(frase.slice(0,10)); // Coge las 10 primeras posiciones
console.log(frase.slice(0,-10)); // Coge la frase menos las 10 ultimas posiciones


function intercambiarCase(mensaje){
    let frase = '';
    for(i=0; i<mensaje.length; i++){
        if ( mensaje[i].localeCompare(mensaje[i].toUpperCase()) === 0){
            frase += mensaje[i].toLowerCase();
        } else if( mensaje[i].localeCompare(mensaje[i].toLowerCase()) === 0){
            frase += mensaje[i].toUpperCase();
        }
    }
    return frase;
}
console.log(intercambiarCase('Hola Caracola'));

function incluirCadena(cadena1, cadena2, pos){
    let resultado = '';
    resultado += cadena2.slice(0,pos);
    resultado += cadena1;
    resultado += cadena2.slice(pos,cadena2.length);
    return resultado;
}
console.log(incluirCadena('PATATA','esternocleidomastoideo',3));

function reducirCadena(cadena, numeroPalabras){
    let arrayFrase = cadena.split(' ',numeroPalabras);
    let frase = '';
    for (let palabra of arrayFrase){
        frase +=`${palabra} `;
    }
    return frase;
}
console.log(reducirCadena('Hola     caracola como estamos los chavalitos',4));