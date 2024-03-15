/* Crea una funzione chiamata sommaNumeri che dato un array di 10 numeri definito da voi nel codice, 
ne calcoli la loro somma e la restituisca come risultato. 
Utilizzare la funzione sommaNumeri per stampare il risultato ottenuto. */

const numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sommaNumeriElement = document.getElementById("sommaNumeri");
let somma = 0;

for (let i = 0; i < numeri.length; i++) {
    somma = somma + numeri[i];
}

console.log(somma)
sommaNumeriElement.innerHTML = "La somma degli elementi inseriti è di " + somma;