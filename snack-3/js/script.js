// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

var invitati = ['Pippo', 'Paperino', 'Pluto', 'Paperina', 'Topolino'];
var partecipazione = false;

var nome = prompt('Inserisci il tuo nome');
nome = nome.charAt(0).toUpperCase() + nome.substr(1).toLowerCase();

for (var i = 0; i < invitati.length; i++){
  if (nome == invitati[i]) {
    partecipazione = true;
    }
}

if (partecipazione == true) {
  console.log('Benvenuto alla festa!');
} else {
  console.log('Mi dispiace non sei invitato');
}
