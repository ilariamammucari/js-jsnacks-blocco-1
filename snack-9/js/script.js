// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.

var numeri = [];
var somma = 0;
var semaforo = true;

while ((somma != 50) && semaforo){
  var utente = parseInt(prompt('Inserisci un numero'));


  if (isNaN(utente)){
    alert('Attento! Devi inserire un numero.');
  } else {
    numeri.push(utente);
    somma += utente;
  }



  if (somma > 50){
    semaforo = false;
    console.log('Hai superato il totale di 50, la somma dei tuoi numeri è di:', somma);
  } else if (somma == 50) {
    console.log('La somma dei numeri che hai inserito è di 50!');
  }
} 
console.log(numeri);