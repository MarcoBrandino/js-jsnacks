/* Scrivere un programma a cui venga chiesto all'utente di inserire numeri uno dopo l'altro. 
Quando l'utente scriverà 2 volte consecutive lo stesso numero allora il programma dovrà terminare. */

let numeroPrecedente;
let numeroUtente;
const numeriUgualiElement = document.getElementById("numeriUguali");

do {
    numeroUtente = parseInt(prompt("Inserisci un numero"));
    while (isNaN(numeroUtente)) {
        alert("Stai inserendo solo lettere, devi inserire dei numeri");
        numeroUtente = parseInt(prompt("Inserisci un numero"));
    }

    console.log("Numero precedente " + numeroPrecedente)
    console.log("Numero utente: " + numeroUtente);

    if (numeroPrecedente === numeroUtente) {
        break;
    }
    else if (numeroPrecedente !== numeroUtente) {
        numeroPrecedente = numeroUtente;
    }
} while (numeroPrecedente === numeroUtente);

console.log("Due numeri uguali")
numeriUgualiElement.innerHTML = "Hai inserito due volte consecutive il numero " + numeroUtente;