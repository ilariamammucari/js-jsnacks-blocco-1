// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.

var arr1 = ['a','b','c','d','e'];
var arr2 = [1,2,3];

confrontoArrey();

while (arr1.length != arr2.length){
  arr2.push(numeriRandom(1,10))
}
console.log(arr1,arr2);





// *****funzioni
function numeriRandom(min, max){
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function confrontoArrey(){
  if (arr1.length < arr2.length){
    var temporale;
    temporale = arr2;
    arr2 = arr1;
    arr1 = temporale;
  } 
}
