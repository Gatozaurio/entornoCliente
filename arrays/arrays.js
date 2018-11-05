let array1 = [1,2,3,4,5];
let array2 = [2,3,4];

function concatenarArrays(array1, array2){
    let array = array1.concat(array2);
    let resultado = [];

    array.sort();

    for(let i=0; i < array.length; i++){
        if (array[i]!==array[i-1] && array[i]!==array[i+1]){
            resultado.push(array[i]);
        }
    }
    return resultado;
}
console.log(concatenarArrays(array1, array2));

let array3 = [5, 21, 56, 3, 12, 76, 4, 37, 1];

console.log("----------------------------");
function invertirFragmento(array, inicio, fin){
    let medio = array.slice(inicio, fin);
    let principio = array.slice(0, inicio);
    let final = array.slice(fin, array.length);
    medio.reverse();
    let resultado = principio.concat(medio, final);
    return resultado;
}
console.log(invertirFragmento(array3, 2, 6));
console.log("----------------------------");

console.log("Buscar mayores de edad:");
var edades = [15, 22, 34, 12, 47];
console.log(edades.filter(x=> x >= 18));
console.log("----------------------------");

console.log("Buscar números:");
let array4 = [5, 21, 56,"hola", 3, 12, 76, "caracola", 4, 37, 1];
console.log(array4.filter(x => isFinite(x)));
console.log("----------------------------");

console.log("Contar votos:");
class Voto{
    constructor(bueno){
        this.bueno = bueno;
    }
}
const votos = [new Voto(true),new Voto(false), new Voto(true)];
console.log(votos.filter(x => x.bueno===true));
console.log("----------------------------");

console.log("Buscar espacio:");
let expresion = /\s+/;
let array5 = [ "aaa aaa", "Hola", "caracola", "aaa2 aaa", "uuuuuuu"];
console.log(array5.find(x => !expresion.test(x)));
console.log("----------------------------");

console.log("Buscar mayor de edad some:");
var edades = [15, 22, 34, 12, 47];
console.log(edades.some(x=> x >= 18));
console.log("----------------------------");

console.log("Comprobar si un voto es mayor a 4:");
class Voto2{
    constructor(puntuacion){
        this.puntuacion = puntuacion;
    }
}
let votos2 = [new Voto2(2),new Voto2(3),new Voto2(4), new Voto2(3)];
console.log(votos2.some(x => x.puntuacion > 4));
console.log("----------------------------");

console.log("Incrementar todos los votos en 1:");
function addVoto(voto){
    voto.puntuacion +1;
    console.log(voto);
}
votos2.forEach(x => x.puntuacion+=1);
votos2.forEach(x => console.log(x.puntuacion));
console.log("----------------------------");

console.log("Obtener un array con todos los votos negativos:");
function esNegativo(voto){
    if(voto.puntuacion < 0)
        return voto;
}
console.log(votos2.map(x => x.puntuacion*-1));
console.log("----------------------------");

console.log("Hacer la media de las puntuaciones de los votos:");
function calcularMedia(total, votoActual){
    total + votoActual;
}
console.log(votos2.reduce((total, voto) => total += voto.puntuacion));
