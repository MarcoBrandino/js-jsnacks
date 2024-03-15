// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.Stampa l'array alla fine.

const arrayUtenteElement = document.getElementById("arrayUtente");

let array = [];

for (let i = 0; i < 6; i++) {
    const inserimentoUtente = parseInt(prompt("Inserisci il " + (i + 1) + "° numero"));
    if (isNaN(inserimentoUtente)) {
        console.log("Numero non valido");
        alert("Numero non valido");
        i = i - 1;
    }
    else if (inserimentoUtente % 2 === 1) {
        array.push(inserimentoUtente);
    }
}

console.log(array);
arrayUtenteElement.innerHTML = array;