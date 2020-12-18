//L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore

var primoNumero;
var secondoNumero;

primoNumero = parseInt(prompt('Inserisci il primo numero'));
secondoNumero = parseInt(prompt('Inserisci il secondo numero'));

if (primoNumero > secondoNumero){
  console.log('Il numero più grande tra i due inseriti è il primo: ' + primoNumero);
} else if (primoNumero < secondoNumero){
  console.log('Il numero più grande tra i due inseriti è il secondo: ' + secondoNumero);
} else {
  console.log('I due numeri sono uguali: ' + primoNumero + ' e ' + secondoNumero);
}