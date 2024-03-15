/* Fate generare un numero random da 0 a 10 al computer, 
e chiedete all'utente di inserire un suo numero. 
Se il numero scelto dall'utente è uguale al numero del computer informate l'utente che ha vinto, 
altrimenti ha perso. 
A questo punto fate giocare l'utente, fintanto che non vince la partita contro il PC */

const numeroRandom = Math.floor(Math.random() * 11);
const numeroFinaleElement = document.getElementById("numeroFinale");
console.log(numeroRandom);

let numeroUtente = parseInt(prompt("A che numero sto pensando da 0 a 10?"));

do {
    // Il numero inserito è NaN
    while (isNaN(numeroUtente)) {
        alert("Se inserisci solo lettere non potrai mai indovinare");
        numeroUtente = parseInt(prompt("A che numero sto pensando da 0 a 10?"));
    }

    // SE hai indovinato bravo
    if (numeroUtente === numeroRandom) {
        break;
    }
    // ALTRIMENTI riprova
    else {
        console.log("Sbagliato, riprova");
        numeroUtente = parseInt(prompt("Sbagliato, ripvova. A che numero sto pensando da 0 a 10?"));
    }
} while (numeroUtente !== numeroRandom);

console.log("BRAVISSIMO, HAI INDOVINATO!!!");
numeroFinaleElement.innerHTML = "BRAVISSIMO, HAI INDOVINATO";