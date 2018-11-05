const regex = /^#(([aA-fF-f0-9]{3})|([aA-fF0-9]{6}))$/;

function esHexadecimal(cadena){
    let resultado = false;
    if(cadena.match(regex, cadena)){
        resultado = true;
    }
    return resultado;
}

console.log(esHexadecimal("#4B0"));