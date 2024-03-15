// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

const invitatiGatsby = ["Marco", "Antonio", "Enrico", "Alessandro", "Giovanni", "Alberto"];

const richiestaInvitato = prompt("Come ti chiami?");
// SERVE QUALCOSA CHE IMPOSTI LA PRIMA LETTERA INSERITA COME MAIUSCOLA. UNA FUNZIONE DA CREARE?
const invitatoDaGatsbyElement = document.getElementById("invitatoDaGatsby");
let invitato = false;

for (let i = 0; i < invitatiGatsby.length; i++) {
    if (richiestaInvitato == invitatiGatsby[i]) {
        console.log(invitatiGatsby[i] + ", Gatsby ti stava aspettando, divertiti");
        invitatoDaGatsbyElement.innerHTML = "Ciao " + invitatiGatsby[i] + ", Gatsby ti stava aspettando, divertiti";
        invitato = true;
        break;
    }
}

if (invitato === false) {
    console.log("Mi dispiace non sei tra gli invitati");
    invitatoDaGatsbyElement.innerHTML = "Mi dispiace non sei tra gli invitati";
}