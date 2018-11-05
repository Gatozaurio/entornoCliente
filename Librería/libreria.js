class Tienda{
    constructor(nombre, clientes, libros, dependientes, dirección, estado){
        this.nombre = nombre;
        this.clientes = clientes;
        this.libros = libros;
        this.dependientes = dependientes;
        this.dirección = dirección;
        this.estado = estado;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }
    set clientes(clientes){
        this._clientes = clientes;
    }
    set libros(libros){
        this._libros = libros;
    }
    set dependientes(dependientes){
        this._dependientes = dependientes;
    }
    set dirección(dirección){
        this._dirección = dirección;
    }
    set estado(dirección){
        this._estado = estado;
    }

    get nombre(){
        return this._nombre;
    }
    get clientes(){
        return this._clientes;
    }
    get libros(){
        return this._libros;
    }
    get dependientes(){
        return this._dependientes;
    }
    get dirección(){
        return this._dirección;
    }
    get estado(){
        return this._estado;
    }
}

class Libro{
    constructor(titulo, isbn, autor, fechaLanzamiento, genero, precio, votos){
        this.titulo = titulo;
        this.isbn = isbn;
        this.autor = autor;
        this.fechaLanzamiento = fechaLanzamiento;
        this.genero = genero;
        this.precio = precio;
        this.votos = votos;
    }

    set titulo(titulo){
        this._titulo = titulo;
    }
    set isbn(isbn){
        this._isbn = isbn;
    }
    set autor(autor){
        this._autor = autor;
    }
    set fechaLanzamiento(fechaLanzamiento){
        this._fechaLanzamiento = fechaLanzamiento;
    }
    set genero(genero){
        this._genero = genero;
    }
    set precio(precio){
        this._precio = precio;
    }
    set votos(votos){
        this._votos = votos;
    }

    get titulo(){
        return this._titulo;
    }
    get isbn(){
        return this._isbn;
    }
    get autor(){
        return this._autor;
    }
    get fechaLanzamiento(){
        return this._fechaLanzamiento;
    }
    get genero(){
        return this._genero;
    }
    get precio(){
        return this._precio;
    }
    get votos(){
        return this._votos;
    }
}

class Persona{
    constructor()
}

class Cliente extends Persona{
    constructor(nombre, apellidos, dni, telefono, direccion, gustos){
        super(nombre, apellidos);
        this._dni = dni;
        this._telefono = telefono;
        this._direccion = direccion;
        this._gustos = gustos;
    }
}

class Autor extends Persona{
    constructor(nombre, apellidos, libros){
        super(nombre, apellidos)
        this._libros = libros;
    }
}

