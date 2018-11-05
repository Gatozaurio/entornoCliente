try{
    mostrarAlerta("Welcome");
}catch(err){
    console.log(`Nombre de error: ${err.name} Error: ${err}`)
}

function dividirCadenas(cadena1, cadena2){
    let numeros1 = '';
    let numeros2 = '';
    for (let i = 0; i < cadena1.length; i++){
        if ( isFinite( cadena1.charAt(i) ) && cadena1.charAt(i)!==' '){
            numeros1 += cadena1.charAt(i);
        }
    }if (numeros1 == ''){
        numeros1 = 0;
    }
    for (let i = 0; i < cadena2.length; i++){
        if ( isFinite( cadena2.charAt(i) ) && cadena2.charAt(i)!==' '){
            numeros2 += cadena2.charAt(i);
        }
    }if (numeros2 == ''){
        numeros2 = 0;
    }
    let resultado = numeros1/numeros2;
    try{
        if (!isFinite(resultado)){
            throw new Error("El resultado es infinito");
        }
    }catch(err){
        resultado = "";
        console.log(err.message);
    }
    console.log(`${numeros1} y ${numeros2}`);
    return resultado;

}
console.log(dividirCadenas('Hola2s cara2cola', 'Hola buenas tardes'));