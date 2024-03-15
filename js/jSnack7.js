/* Scrivere un programma che stampi la tabellina del 2, fino al numero 1000. 
Modificate poi il programma in modo che venga chiesto all'utente il numero massimo consentito, 
e stampare tutta la tabellina del 2 fino al numero inserito */

const tabellinaElement = document.getElementById("tabellina");

// Tabellina del 2 fino al numero 1000
/* for (let i = 0; i < 501; i++) {
    console.log(i * 2);
} */

// Tabellina del 2 fino a numero utente
let numeroUtente = 0;
do {
    numeroUtente = parseInt(prompt("Stamperò tutta la tabellina del 2 fino al numero che mi dirai"));
    if (isNaN(numeroUtente)) {
        alert("Devi inserire un numero, non solo lettere")
    }
} while (isNaN(numeroUtente));

let array = [];

if (numeroUtente % 2 === 0) {
    const lunghezzaCiclo = numeroUtente / 2;
    for (let i = 0; i < (lunghezzaCiclo + 1); i++) {
        console.log(i * 2);
        array.push(i * 2);
    }
}
// ALTRIMENTI il numero inserito è dispari e cicla fino al numero precedente che è pari
else {
    const lunghezzaCiclo = numeroUtente / 2;
    for (let i = 0; i < lunghezzaCiclo; i++) {
        console.log(i * 2);
        array.push(i * 2);
    }
}

tabellinaElement.innerHTML = array;