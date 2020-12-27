// Primo snack - 15 minuti
// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari
var numeri = [];
var somma = 0;


// popolo l'arrey
for (var i = 0; i < 10; i++){
  var numeriInseriti = numeriRandom(1,10);
  numeri.push(numeriInseriti);
}


// sommo i numeri nell'arrei con indice dispari
var i = 0;
while (i < numeri.length){
  if (i % 2 != 0){
    somma += numeri[i];
  }

  i++;
}

// stampo
console.log(numeri);
console.log(somma);



// *****funzioni
function numeriRandom(min, max){
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}