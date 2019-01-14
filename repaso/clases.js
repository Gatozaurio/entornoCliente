class Liga{
    constructor(nombre, temporada){
        this.nombre = nombre;
        this.temporada = temporada;
        this.equipos = [];
    }

    addEquipo(equipo){
        this.equipos.push(equipo);
    }

    set nombre(nombre){
        this._nombre = nombre;
    }  
    set temporada(temporada){
        this._temporada = temporada;
    }
    set equipos(equipos){
        this._equipos = equipos;
    }

    get nombre(){
        return this._nombre;
    }
    get temporada(){
        return this._temporada;
    }
    get equipos(){
        return this._equipos;
    }
    
    toString(){
        let salto = '<br />';
        let resultado = `${this.nombre}${salto}`;
        resultado += `Temporada: ${this.temporada}${salto}`;
        resultado += `Equipos:${salto}<ul>`;
        this.equipos.forEach(function(x){
            resultado += `<li>${x.nombre}</li>`;
        }
        )
        resultado += '</ul>';
    
        return resultado;
    }
}

class Equipo{
    constructor(nombre, ciudad){
        this.nombre = nombre;
        this.ciudad = ciudad;
        this.jugadores = [];
    }

    addJugador(jugador){
        this.jugadores.push(jugador);
    }

    set nombre(nombre){
        this._nombre = nombre;
    }
    set ciudad(ciudad){
        this._ciudad = ciudad;
    }
    set escudo(escudo){
        this._escudo = escudo;
    }
    set jugadores(jugadores){
        this._jugadores = jugadores;
    }

    get nombre(){
        return this._nombre;
    }
    get ciudad(){
        return this._ciudad;
    }
    get escudo(){
        return this._escudo;
    }
    get jugadores(){
        return this._jugadores;
    }
}

class Jugador{
    constructor(nombre){
        this.nombre = nombre;
    }
    set jugador(jugador){
        this._jugador = jugador;
    }

    get jugador(){
        return this._jugador;
    }
}

