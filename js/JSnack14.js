/* Chiedi un numero di 4 cifre all’utente. 
Crea e usa una funzione che calcola la somma di tutte le cifre che compongono il numero e 
ritorni il risultato. 
Usa questa funzione per stampare poi a video il risultato ottenuto.*/

let numeroUtente = parseInt(prompt("Inserisci un numero di quattro cifre"));
const sommaNumeriElement = document.getElementById("sommaNumeri");

do {
    console.log(String(numeroUtente).length);
    // SE non hai inserito un numero
    if (isNaN(numeroUtente)) {
        alert("Non hai inserito un numero");
        numeroUtente = parseInt(prompt("Inserisci un numero di quattro cifre"));
    }
    // SE hai inserito un numero di quante cifre?
    if (String(numeroUtente).length !== 4) {
        alert("Hai inserito un numero di " + String(numeroUtente).length + " cifre, devi inserirne uno di 4");
        numeroUtente = parseInt(prompt("Inserisci un numero di quattro cifre"));
    }
} while (isNaN(numeroUtente) && String(numeroUtente).length !== 4)

console.log(numeroUtente);

const convertoInStringa = String(numeroUtente);

let arrayNumeri = convertoInStringa.split("");
console.log(arrayNumeri);
let somma = 0;

for (let i = 0; i < arrayNumeri.length; i++) {
    somma = somma + (parseInt(arrayNumeri[i]));
}

console.log(typeof (somma), somma);
sommaNumeriElement.innerHTML = "La somma delle quattro cifre che hai inserito è di " + somma;