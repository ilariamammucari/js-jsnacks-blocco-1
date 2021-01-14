// Generatore di “nomi cognomi” casuali: prendendo a caso un nome e un cognome da una lista di nomi e da una lista di cognomi, Gatsby vuole generare una falsa lista di invitati.

var nomi = ['Pippo', 'Pluto', 'Paperino','Topolina', 'Paperina', 'Anna', 'Marco', 'Luca'];
var cognomi = ['Rossi', 'Bianchi','Verdi','Gialli','Arancioni', 'Blu', 'Marroni', 'Neri'];
var nomeCognome = [];


for ( var i = 0; i < 10; i++ ){

  var indice = numeriRandom(0,7);
  var nome = nomi[indice];
  var cognome = cognomi[indice];

  nomeCognome.push(nome + ' ' + cognome);

  
}
document.getElementById('lista').innerHTML = nomeCognome;







// ****funzioni
function numeriRandom(min, max){
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}