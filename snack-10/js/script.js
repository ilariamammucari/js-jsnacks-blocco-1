// Realizzare (utilizzando i cicli for) una piramide di asterischi.

// for (var i = 0; i < 5; i++){
//   document.getElementById('prima').innerHTML += '- ';
// }
// document.getElementById('prima').innerHTML += '*';



// for (var i = 0; i < 4; i++){
//   document.getElementById('seconda').innerHTML += '- ';
// }
// for (var i = 0; i < 3; i++){
//   document.getElementById('seconda').innerHTML += '*';
// }

// for (var i = 0; i < 3; i++){
//   document.getElementById('terza').innerHTML += '- ';
// }
// for (var i = 0; i < 5; i++){
//   document.getElementById('terza').innerHTML += '*';
// }

// for (var i = 0; i < 2; i++){
//   document.getElementById('quarta').innerHTML += '- ';
// }
// for (var i = 0; i < 7; i++){
//   document.getElementById('quarta').innerHTML += '*';
// }

// for (var i = 0; i < 1; i++){
//   document.getElementById('quinta').innerHTML += '- ';
// }
// for (var i = 0; i < 9; i++){
//   document.getElementById('quinta').innerHTML += '*';
// }

// for (var i = 0; i < 11; i++){
//   document.getElementById('sesta').innerHTML += '*';
// }


var altezza = 6;
var piramide = '';

for (var i = 1; i <= altezza; i++){

  for (var j = 1; j <= altezza-i; j++){ //spazi scendono di 1 ogni riga
    piramide += ' ';
  }

  for (var x = 1; x <= (i*2)-1; x++){ //asterischi salgono di 2 per ogni riga
    piramide += '*';
  }  
  
  piramide += '\n';

}

console.log(piramide);
