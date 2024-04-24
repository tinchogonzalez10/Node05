function getSenales(){
    let senales = [];
    let signal = 0;
    while (signal >= 0) {
        signal = Math.floor(Math.random() * 380) - 20;
        if (signal >= 0) {
            senales.push(signal);
        }
    }
    return senales;
}

function convertirSenales(senales) {
    let cuadrantes = [];
    for (let i = 0; i < senales.length; i++) {
        if (senales[i] >= 0 && senales[i] < 90) {
            cuadrantes.push('Norte');
        } else if (senales[i] >= 90 && senales[i] < 180) {
            cuadrantes.push('Este');
        } else if (senales[i] >= 180 && senales[i] < 270) {
            cuadrantes.push('Sur');
        } else {
            cuadrantes.push('Oeste');
        }
    }
    return cuadrantes;
}

function convertirSenalesAString(senales) {
    let cuadrantes = convertirSenales(senales);
    return cuadrantes.join(' ');
}

function contarCiclos(cuadrantes) {
    let ciclos = ['N', 'E', 'S', 'O'];
    let ciclosInversos = ['O', 'S', 'E', 'N'];
    let contador = 0;
    let indice = 0;

    for (let i = 0; i < cuadrantes.length; i++) {
        if (cuadrantes[i] === ciclos[indice] || cuadrantes[i] === ciclosInversos[indice]) {
            indice++;
            if (indice === 4) {
                contador++;
                indice = 0;
            }
        } else {
            indice = 0;
        }
    }
    return contador;
}

let senales = getSenales();
console.log(senales);
let cuadrantes = convertirSenalesAString(senales).split(' ');
let numCiclos = contarCiclos(cuadrantes);
console.log(numCiclos); 
