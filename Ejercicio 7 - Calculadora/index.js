//Funcion que cambiara el color del fondo del DOM, y aplicara la clase de CSS 'modoOscuro'.
function modoDarkLight() {
    document.body.classList.toggle('modoOscuro');
}

// Agregamos La Funcion al Boton que Limpiara los Parrafos del Visor.
function borrar() {
    numUno.value = '';
    numDos.value = '';
}

//Funcion Igual que Resuelve la operacion matematica y lo grafica en pantalla.
function igual() {
    numUno.value = numDos.value;
    if (numDos.value.includes('+') === true) {
        const valor = numDos.value.split('+');
        const num1 = Number(valor[0]);
        const num2 = Number(valor[1]);
        const result = operacion(num1, num2, suma);
        numDos.value = result;        
    } else if (numDos.value.includes('-') === true) {
        const valor = numDos.value.split('-');
        const num1 = Number(valor[0]);
        const num2 = Number(valor[1]);
        const result = operacion(num1, num2, resta);
        numDos.value = result;
    } else if (numDos.value.includes('/') === true) {
        const valor = numDos.value.split('/');
        const num1 = Number(valor[0]);
        const num2 = Number(valor[1]);
        const result = operacion(num1, num2, division);
        numDos.value = result;
    } else if (numDos.value.includes('*') === true) {
        const valor = numDos.value.split('*');
        const num1 = Number(valor[0]);
        const num2 = Number(valor[1]);
        const result = operacion(num1, num2, multiplicacion);
        numDos.value = result;
    }
};

function suma(a, b) {
    return a + b;
};

function resta(a, b) {
    return a - b;
};

function division(a, b) {
    return a / b;
};

function multiplicacion(a, b) {
    return a * b;
};

function operacion(a, b, callback) {
    return callback(a, b);
};