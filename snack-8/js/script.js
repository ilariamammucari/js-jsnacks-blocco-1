// Realizziamo il gioco della morra cinese in JavaScript. Vince chi totalizza per primo 4 punti.


// faccio una variabile per il pc dove farò poi casualmente scegliere uno tra sasso carta o forbice, faccio inserire all'utente la sua scelta, imposto condizioni per assegnare il punto al pc o all'utente e per decretare il vincitore quando raggiunge un punteggio di 4 punti
var utente;
var pc;
var punteggioPc = 0;
var punteggioUtente = 0;



while ((punteggioPc != 4) && (punteggioUtente != 4)) {
  
  utente = prompt('Inserisci sasso con: s, carta con: c, e forbice con: f').toLowerCase();
  pc = numeroRandom(1,3);

  if (pc == 1) {
    pc = 's';
  } else if (pc == 2){
    pc = 'c';
  } else {
    pc = 'f';
  }


  if ((utente != 's') && (utente != 'c') && (utente != 'f')){
    alert('Atento ad inseirire un carattere supportato dal gioco!')
  } else if ((utente == 's' && pc == 'f') || (utente == 'f' && pc == 'c') || (utente == 'c' && pc == 's')) {
    console.log(pc, utente);
    ++punteggioUtente;
  } else if (utente == pc){
    console.log(pc, utente);
  } else {
    console.log(pc, utente);
    ++punteggioPc;
  }
}
console.log(punteggioPc,punteggioUtente);

var win = vittoria(punteggioUtente,punteggioPc);
console.log(win);






// funzioni
function numeroRandom(min, max){
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function vittoria(x,y){
  var vincitore;
  if (x > y){
    vincitore = 'Hai vinto!';
  } else if (x < y){
    vincitore = 'Hai perso!';
  }
  return vincitore;
}

