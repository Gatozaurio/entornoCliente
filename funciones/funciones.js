
function dividirClosure (numero1, numero2){
resultado1 = dividir3(numero1);
    resultado2 = dividir4(numero2);
    resultadoSuma = resultado1 + resultado2;
    return resultadoSuma;
}

function dividir3(numero){
    resultado = numero/3;
    if(resultado === 0 || resultado%3!==0){
        return resultado;
    }else{
        dividir3(resultado);
    }
}

function dividir4(numero){
    resultado = numero/4;
    if(resultado === 0 || resultado%4!==0){
        return resultado;
    }else{
        dividir4(resultado);
    }
}

console.log(dividirClosure(1067,8));

