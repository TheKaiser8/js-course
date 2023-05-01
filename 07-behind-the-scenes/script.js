'use strict';

////////////////////////////////////
// LEZIONE 1: Scoping in Practice (Sez. 8, Lez. 93)

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;
//   console.log(firstName);
//   return age;
// }

// const firstName = 'Jonas'; // essendo dichiarata nello scope globale, la variabile firstName puù essere utilizzata nella funzione, ma se io richiamassi prima la funzione questa variabile non potrebbe essere letta perchè risulterebbe non ancora dichiarata
// calcAge(1991);

// function INSIDE function:
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  function printAge() {
    // const output = `${firstName}, you are ${age}, born in ${birthYear}`;
    let output = `${firstName}, you are ${age}, born in ${birthYear}`; // se al posto di const utilizzo let, posso cambiare il valore della variabile dichiarata fuori dal block scope ridefinendola nel block scope interno. Se all'interno del block scope dichiaro un'altra variabile output, all'interno del block scope sarà visibile una variabile output completamente nuova che non centra nulla con quella output dichiarata nella function printAge()
    console.log(output);

    // BLOCK SCOPE:
    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;

      // creazione nuove variabili con lo stesso nome delle variabili degli scope esterni:
      const firstName = 'Steven'; // se dichiaro un'altra variabile firstName all'interno del block scope, sarà questa la variabile che verrà stampata perchè JS la ricercherà iniziando dall'ambito corrente (current scope) e non farà una ricerca attraverso lo scope chain

      // riassegnazione di una variabile già dichiarata in ambito esterno
      output = 'NEW OUTPUT!';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      // function IN BLOCK SCOPE:
      function add(a, b) {
        return a + b;
      }
      console.log(add(8, 11));
    }
    console.log(millenial); // visibile perchè ha un function scope
    // console.log(str); // al di fuori del blocco NON è visibile se è una variabile CONST o LET, ma se fosse VAR sarebbe visibile nell'ambito della funzione printAge
    // console.log(add(8, 2)); // una funzione all'interno di un BLOCK SCOPE NON è visibile al di fuori di esso. *** questo è vero solo in STRICT MODE
    console.log(output); // variabile manipolata in un ambito figlio
  }

  printAge();

  return age;
}

const firstName = 'Jonas'; // essendo dichiarata nello scope globale, la variabile firstName puù essere utilizzata nella funzione, ma se io richiamassi prima la funzione questa variabile non potrebbe essere letta perchè risulterebbe non ancora dichiarata
calcAge(1991);

// // NON posso accedere alle variabili dichiarate all'interno della funzione calcAge:
// console.log(age);
// printAge();
