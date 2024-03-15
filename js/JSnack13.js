/* Crea una funzione chiamata mediaAritmetica che prende in input un array di 10 numeri 
e restituisca la media aritmetica dei numeri contenuti nell'array. 
Utilizzare la funzione sommaNumeri precedentemente creata per calcolare 
la media dei 10 numeri che vanno chiesti all'utente attraverso dei prompt */

let somma = 0;
const mediaNumeriElement = document.getElementById("mediaNumeri");

for (let i = 0; i < 10; i++) {
    let numeroUtente = parseInt(prompt("Inserisci il " + (i + 1) + "° numero"));
    // Il numero inserito è valido?
    while (isNaN(numeroUtente)) {
        numeroUtente = parseInt(prompt("Il numero inserito non era valido inserisci nuovamente il " + (i + 1) + "° numero"));
    }
    somma = somma + numeroUtente;
}
const mediaAritmetica = somma / 10;
console.log("La somma è " + somma + " e la media aritmetica dei 10 numeri inseriti è " + mediaAritmetica);
mediaNumeriElement.innerHTML = "La somma è " + somma + " e la media aritmetica dei 10 numeri inseriti è " + mediaAritmetica;