function calcularPorcentaje(cuadrantes) {
    let total = cuadrantes.length;
    let conteo = { 'Norte': 0, 'Este': 0, 'Sur': 0, 'Oeste': 0 };

    for (let i = 0; i < total; i++) {
        conteo[cuadrantes[i]]++;
    }

    let porcentajes = {};
    for (let cuadrante in conteo) {
        porcentajes[cuadrante] = (conteo[cuadrante] / total) * 100;
    }

    return porcentajes;
}

// En el main
let senales = getSeniales();
console.log('Señales: ', senales);

let cuadrantes = convertirSenales(senales);
console.log('Secuencia de cuadrantes: ', cuadrantes.join(' '));

let numCiclos = contarCiclos(cuadrantes);
console.log('Cantidad de ciclos completos: ', numCiclos);

let porcentajes = calcularPorcentaje(cuadrantes);
console.log('Porcentaje recorrido por cada cuadrante: ', porcentajes);
