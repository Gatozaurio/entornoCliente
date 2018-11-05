class Coche{
    constructor(marca, color, asientos){
        this.marca = marca;
        this.color = color;
        this.asientos = asientos;
    }

    set marca(marca){
        this._marca = marca;
    }
    set color(color){
        this._color = color;
    }
    set asientos(asientos){
        this._asientos = asientos;
    }
    get marca(){
        return this._marca;
    }
    get color(){
        return this._color;
    }
    get asientos(){
        return this._asientos;
    }

    mostrarCoche(){
        return `${this.marca} ${this.color} ${this.asientos}`;
    }

    static cocheMasDeCinco(asientos){
        return asientos > 5;
    }

    toString(){
        return `Marca: ${this.marca} Color: ${this.color} Asientos: ${this.asientos}`
    }
}

class CocheElectrico extends Coche {
    constructor(marca, color, asientos, bateria){
        super(marca, color, asientos);
        this.bateria=bateria;
    }
}
let coche1 = new Coche("Renault", "Rojo", 8);

coche1.marca = "Seat";
coche1.color = "Azul";
coche1.asientos = 4;

coche1.funcion1 = function(){}

for (const key in coche1) {
    console.log(`${key}:${coche1[key]}`)
}

console.log(coche1.mostrarCoche());
console.log(Coche.cocheMasDeCinco(5));
console.log('////////////////////////');

console.log(coche1);
console.log(coche1.toString);
console.log(coche1.toString());
console.log(""+coche1); // Este es el toString bueno
console.log(""+coche1.toString);
console.log(""+coche1.toString());



