/* Fate generare un numero random da 0 a 10 al computer, 
e chiedete all'utente di inserire un suo numero.
Se il numero scelto dall'utente è uguale al numero del computer 
informate l'utente che ha vinto, altrimenti ha perso. */

const numeroRandom = Math.floor(Math.random() * 11);
const numeroFinaleElement = document.getElementById("numeroFinale");
console.log(numeroRandom);

let numeroUtente = parseInt(prompt("A che numero sto pensando da 0 a 10?"));
while (isNaN(numeroUtente)) {
    alert("Se inserisci solo lettere non potrai mai indovinare");
    numeroUtente = parseInt(prompt("A che numero sto pensando da 0 a 10?"));
}

if (numeroUtente === numeroRandom) {
    console.log("BRAVISSIMO, HAI INDOVINATO!!!");
    numeroFinaleElement.innerHTML = "BRAVISSIMO, HAI INDOVINATO";
}
else {
    console.log("Hai perso");
    numeroFinaleElement.innerHTML = "Hai perso, stavo pensando al " + numeroRandom;
}