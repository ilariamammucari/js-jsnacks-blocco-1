// Primo snack
// Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while
var numero;
var somma = 0;
// for (var i = 0; i <= 5; i++){
//   numero = parseInt(prompt('Inserisci un numero'));
//   somma += numero;
// }
// console.log(somma);


var i = 0;
while (i <= 5){
  numero = parseInt(prompt('Inserisci un numero'));
  somma += numero;
  i++;
}
console.log(somma);