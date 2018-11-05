//Implementar las siguientes funciones para que pasen una serie de pruebas
//Usando solo estructuras de control para ello.

//Devuelves 1 si a es mayor que b
//Devuelves -1 si a es menor que b
//Devuelves 0 si a es igual b

function comprobacionNumero(a){
    let retorno = true;
    if(typeof a !== "number" || a == infinity || a <= number.MIN_VALUE || a >= Number.MAX_VALUE){
        retorno = false;
    }
    return retorno;
}

function quienEsMayor(a,b){
    if(typeof a!="number" || typeof b!="number") return `Introduce números`;
    else{
        if(a>b) return 1;
        else if(a<b) return -1;
        else return 0;
    }
    console.log(a);
}
console.log(`Quien es mayor: ${quienEsMayor(1111111144444444444444444444444111111111111111,21)}`);

//Dado un array de elementos, devuelve la suma de todos aquellos que los elementos sean pares
function sumarElementosPares(elementos){
    let sum = 0;
    for(i=0; i<elementos.length; i++){
        if (elementos[i]%2===0){
            sum += elementos[i];
        }
    }
    return sum;
}
console.log(`Suma de pares: ${sumarElementosPares([1,2,3,3,3,5,6,2,4])}`);

//Dado un array de elementos devuelve el valor mas grande de todos ellos.
function escogerValorMasGrande(elementos){

    if(elementos.length===0){
        console.log("Debe insertar valores.")
    }
    let mayor = 0;


    for(i=0; i<elementos.length; i++){
        if (elementos[i]>mayor){
            mayor = elementos[i];
        }
    }
    return mayor;
}
console.log(`Escoger valor más grande: ${escogerValorMasGrande([-1,-6,-20])}`);

//Dada una palabra cualquier, devuelve la palabra alreves, por ejemplo: "HOLA" => "ALOH"
function invertirUnaPalabra(String){
    if(typeof(cadena)==='string'){

        var stringInvertido = "";

        for (var i = String.length - 1; i >= 0; i--) { 
            stringInvertido += String.charAt(i);
        }
    }
    return stringInvertido;
}
console.log(invertirUnaPalabra("Hola caracola"));

//Dada un array, cuenta el numero de elementos impares que contiene
function contarElementosImpares(elementos){

}

function validarDNI(dni){
    let isValid = 'false';
    const letras = "TRWAGMYFPDXBNJZSQVHLCKE"

    if(typeof(dni)!=='string'){
        return isValid;
    } else if (dni.length!==9){
        return isValid;
    } else if ()

    let valor = 

}

