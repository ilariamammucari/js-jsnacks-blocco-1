// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array

var vuoto = [];

// ciclo for
// for (var i = 0; i <= 5; i++){
//   var numero = parseInt(prompt('Inserisci un numero'));
//   if (numero%2 != 0) {
//     vuoto.push(numero);
//     console.log(vuoto);
//   }
// }

var i = 0;
while (i <= 5){
  var numero = parseInt(prompt('Inserisci un  numero'));
  if (numero%2 != 0){
    vuoto.push(numero);
    console.log(vuoto);
  }
  i++;
}