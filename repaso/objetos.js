
let liga01 = new Liga('Liga burro', '01');
let liga02 = new Liga('Liga elefante', '01');

let equipo01 = new Equipo('Sepias Saltarinas', 'Sevilla');
let equipo02 = new Equipo('Hipopotamos Voladores', 'Cádiz');
let equipo03 = new Equipo('Pulpos Mágicos', 'Córdoba');
let equipo04 = new Equipo('Parguelas sin fronteras', 'Sevilla');
let equipo05 = new Equipo('El calvo tu tío', 'Cádiz');
let equipo06 = new Equipo('Farloparlantes', 'Córdoba');

let jugador01 = new Jugador('Manolo');
let jugador02 = new Jugador('Pepe');
let jugador03 = new Jugador('Eustaquio');
let jugador04 = new Jugador('Leopoldo');
let jugador05 = new Jugador('Clotildo');
let jugador06 = new Jugador('Herminio');

liga01.addEquipo(equipo01);
liga01.addEquipo(equipo02);
liga01.addEquipo(equipo03);

liga02.addEquipo(equipo04);
liga02.addEquipo(equipo05);
liga02.addEquipo(equipo06);

equipo01.addJugador(jugador01);
equipo01.addJugador(jugador02);
equipo02.addJugador(jugador03);
equipo02.addJugador(jugador04);
equipo03.addJugador(jugador05);
equipo03.addJugador(jugador06);

let todasLasLigas = [];
todasLasLigas.push(liga01);
todasLasLigas.push(liga02);
