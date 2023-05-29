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
    const result = eval(numDos.value);
    numDos.value = result;
};
