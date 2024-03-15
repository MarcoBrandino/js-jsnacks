//L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.

const primaParola = prompt("Inserisci una parola");
const secondaParola = prompt("Inseirsci un'altra parola");
let parolaPiuLungaElement = document.getElementById("parolaPiuLunga");

if (primaParola.length < secondaParola.length) {
    console.log(primaParola, secondaParola);
    parolaPiuLungaElement.innerHTML = primaParola + " " + secondaParola;
} else {
    console.log(secondaParola, primaParola);
    parolaPiuLungaElement.innerHTML = secondaParola + " " + primaParola;
}