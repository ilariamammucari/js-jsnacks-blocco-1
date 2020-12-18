//L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.


var primaParola = prompt('Inserisci la prima parola');
var secondaParola = prompt('Inserisci la seconda parola');

// controllo che nelle parole inserite dall'utente non ci siano spazi che altrimenti verrebbero calcolati nella lunghezza della stringa
primaParola = primaParola.trim();
secondaParola = secondaParola.trim();

var lunghezzaParola1 = primaParola.length;
var lunghezzaParola2 = secondaParola.length;

if (lunghezzaParola1 > lunghezzaParola2){
  console.log('le parole dalla più corta alla più lunga: ' + secondaParola + ', ' + primaParola);
} else if (lunghezzaParola1 < lunghezzaParola2){
  console.log('le parole dalla più corta alla più lunga: ' + primaParola + ' ' + secondaParola);
} else {
  console.log('Le parole sono lunghe uguali! ' + primaParola + ', ' + secondaParola);
}

