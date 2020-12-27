// Realizziamo il classico gioco indovina numero in JavaScript
// Occorre indovinare un numero casuale compreso tra 1 e 100, generato dal computer.
// Il giocatore ha a disposizione 4 tentativi. Quando sbaglia gli verrà detto se il numero da indovinare è più alto oppure più basso.
// Bonus: provate 3 livelli di complessità
// livello 1: numeri da 1 a 100
// livello 2: numero da 1 a 80
//livello 3: numeri da 1 a 50

// decido i livelli di difficoltà
var numeroMax = 50;
var livelloDifficolta = parseInt(prompt('Scegli il livello di difficoltà: 1, 2 o 3'));


// controllo che l'utente inserisca un numero che corrisponde ad uno dei livelli
if((livelloDifficolta < 1) || (livelloDifficolta > 3)){
  do {
    livelloDifficolta = parseInt(prompt('Attento, inserisci un livello di difficoltà tra 1, 2 o 3'));
  } while ((livelloDifficolta < 1) || (livelloDifficolta > 3));
}


if (livelloDifficolta == 2){
  numeroMax = 80;
} else if (livelloDifficolta == 3){
  numeroMax = 100;
}


// genero numero casuale del pc con una funzione e stabilisco sempre con una funzione il numero di tentativi dell'utente dando un indizio in base al numero che inserisce e stampando il messaggio opportuno per i vari tentativi
var numeroCasuale = numeroRandom(1,numeroMax);
console.log(numeroCasuale);
var tentativi = opportunitàGiocatore(numeroCasuale,numeroMax);
console.log(tentativi);




// funzioni
function numeroRandom(min, max){
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}



function opportunitàGiocatore(x,y){

  for (var i = 0; i < 4; i++){
    var numeroGiocatore = parseInt(prompt('Indovina il numero. ti do un indizio: il numero è compreso tra 1 e ' + y));

    var possibilita;
    if (numeroGiocatore < x) {
      possibilita = alert('Non hai indovinato. Il numero da inserire è più grande!');
    } else if (numeroGiocatore > x){
      possibilita = alert('Non hai indovinato. Il numero da inserire è più piccolo!');
    } else {
      possibilita = 'Complimenti,hai indovinato!!'
      return possibilita;
    }
  }
  possibilita = 'Mi dispiace hai raggiunto il numero massimo di possibilità. Hai perso!';
  return possibilita;
}
  