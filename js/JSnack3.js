// Il software deve chiedere per 10 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.

let somma = 0;
const sommaUtenteElement = document.getElementById("sommaNumeri");

for (let i = 0; i < 10; i++) {
    const numeroUtente = parseInt(prompt("Inserisci il " + (i + 1) + "° numero"));
    if (isNaN(numeroUtente)) {
        alert("Numero non valido");
        i = i - 1;
    } else {
        somma = somma + numeroUtente;
    }
}

sommaUtenteElement.innerHTML = "La somma dei 10 numeri inseriti è " + somma;
console.log(somma);
