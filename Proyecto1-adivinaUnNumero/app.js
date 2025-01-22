let maxNumero = parseInt(prompt("Vamos a jugar a adivinar un número entero entre 1 y n, ¿Qué valor quieres que tome n?"))
let numeroSecreto = Math.floor(Math.random()*maxNumero)+1;
//console.log(numeroSecreto);
let maxIntentos = parseInt(prompt("¿Hasta cuántos intentos quieres tener?"));
let numeroUsuario = parseInt(prompt(`Ingrese un número entero del 1 al ${maxNumero}, porfavor. Tienes hasta ${maxIntentos} intentos`));
let intentos = 1;

while (numeroSecreto != numeroUsuario) {


    if (intentos == maxIntentos | numeroSecreto == numeroUsuario) {
        break;
    }

    if (numeroUsuario > numeroSecreto) {
        alert(`Intenta otra vez, tu número es mayor que el secreto`);
    } else {
        alert(`Intenta otra vez, tu número es menor que el secreto`);
    }
    
    numeroUsuario = parseInt(prompt(`Ingrese un número entero del 1 al ${maxNumero}, porfavor. Será tu intento número ${intentos++}`));

}

if (numeroSecreto == numeroUsuario) {
    alert(`Adivinaste en ${intentos} ${intentos == 1 ? 'intento' : 'intentos'}! El número era ${numeroSecreto}`)
} else {
    alert("Se te acabaron los intentos");
}