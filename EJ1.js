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

let senales = getSenales();
console.log(senales);
let cuadrantes = convertirSenales(senales);
console.log(cuadrantes);