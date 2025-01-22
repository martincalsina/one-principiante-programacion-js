//let titulo = document.querySelector('h1');
//titulo.innerHTML = "Juego del número secreto";
//let parrafo = document.querySelector('p');
//parrafo.innerHTML = "Ingresa un número entre el 1 y el 10";
let numeroMaximo = 10;
let numeroSecreto; 
let intentos;
let listaNumerosSorteados = [];
//la siguiente funciona las inicializa
reiniciarJuego();

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo)+1;

    if (listaNumerosSorteados.length === numeroMaximo) { //ya no hay números para adivinar
        asignarTextoElemento("p", "El juego ha acabado, se han sorteado todos los números posibles.");
        return;
    }

    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }

}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p", `Acertaste el número en ${intentos} ${intentos == 1 ? 'intento' : 'intentos' }!`);
        document.getElementById("reiniciar").removeAttribute('disabled');
        limpiarCaja();
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p", "El número secreto es menor al ingresado");
        } else {
            asignarTextoElemento("p", "El número secreto es mayor al ingresado");
        }
        intentos++;
    }

}

function limpiarCaja() {
    document.querySelector("#valorUsuario").value = '';
}

function reiniciarJuego() {
    //observando cómo se ve la UI ni bien cargo el template, necesito:
    //tener el header de juego
    //el parráfo que pide ingresar un número
    //deshabilitar el button de reiniciar
    //limpiar la caja

    limpiarCaja();
    mensajesIniciales();
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    document.querySelector("#reiniciar").setAttribute("disabled", true);

}

function mensajesIniciales() {
    asignarTextoElemento("h1", "Juego del número secreto");
    asignarTextoElemento("p", `Ingresa un número entre el 1 y el ${numeroMaximo}`);
}