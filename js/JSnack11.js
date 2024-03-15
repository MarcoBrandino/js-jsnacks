/* Creare una funzione che stampa il cubo dei primi N numeri, 
dove N è un numero indicato dall’utente.
Una volta creata la funzione chiedere all'utente di inserire N con un prompt e 
richiamate la funzione per dare la risposta all'utente. */

const numeroUtente = parseInt(prompt("Inseriesci un numero e stamperò il cubo dei numeri da 0 al tuo numero"));
let numeriAlCuboElement = document.getElementById("numeriAlCubo");
let arrayNumeriAlCubo = [];

while (isNaN(numeroUtente)) {
    alert("Stai inserendo solo lettere, devi inserire dei numeri");
    numeroUtente = parseInt(prompt("Inserisci un numero e stamperò il cubo dei numeri da 0 al tuo numero"));
}

for (let i = 0; i < (numeroUtente + 1); i++) {
    console.log(i + " al cubo = " + Math.pow(i, 3));
    arrayNumeriAlCubo.push(i + " al cubo = " + Math.pow(i, 3) + " ");
}

numeriAlCuboElement.innerHTML = arrayNumeriAlCubo;