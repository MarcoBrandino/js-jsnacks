// L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.

// Primo numero utente
let primoNumero = parseInt(prompt("Inserisci il primo numero"));
while (isNaN(primoNumero)) {
    console.log("Numero NAN")
    primoNumero = parseInt(prompt("Il numero inserito non era valido inserisci nuovamente il primo numero"));
}
// Secondo numero utente
let secondoNumero = parseInt(prompt("Inserisci il secondo numero"));
while (isNaN(secondoNumero)) {
    console.log("Numero NAN")
    secondoNumero = parseInt(prompt("Il numero inserito non era valido inserisci nuovamente il secondo numero"));
}

// console.log(primoNumero);
// console.log(secondoNumero);

let max = 0;
const numeroMaggioreElement = document.getElementById("numeroMaggiore");

if (primoNumero > secondoNumero) {
    console.log("Il numero maggiore è " + primoNumero);
    max = primoNumero;
    numeroMaggioreElement.innerHTML = "Il numero maggiore è " + max;
}
else if (secondoNumero > primoNumero) {
    console.log("Il numero maggiore è " + secondoNumero);
    max = secondoNumero;
    numeroMaggioreElement.innerHTML = "Il numero maggiore è " + max;
} else {
    console.log("I due numeri sono uguali");
    numeroMaggioreElement.innerHTML = "I due numeri sono uguali";
}


