'use strict';

/*
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
*/

////////////////////////////////////
// LEZIONE 2: Hosting and Time Dead Zone (TDZ) in Practice (Sez. 8, Lez. 95)

// VARIABILI:
// utilizziamo le variabili prima di dichiararle per vedere la risposta di JS:
// console.log(me); // undefined, le var sono issate (sollevate, hoisted) con il valore di undefined
// console.log(job); // Uncaught ReferenceError: can't access lexical declaration 'job' before initialization. Si trova in TDZ
// console.log(year); // Uncaught ReferenceError: can't access lexical declaration 'year' before initialization. Si trova in TDZ

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// FUNZIONI:
// utilizziamo le funzioni prima di dichiararle per vedere la risposta di JS:
// console.log(addDecl(2, 3)); // 5
// console.log(addExpr(2, 3)); // Uncaught ReferenceError: can't access lexical declaration 'addExpr' before initialization. Si trova in TDZ. Utilizzando var (invece di const) otteniamo: Uncaught TypeError: addExpr is not a function perché undefined (viene letta così: undefined(2,3))
// console.log(addArrow(2, 3)); // Uncaught ReferenceError: can't access lexical declaration 'addArrow' before initialization. Si trova in TDZ. Utilizzando var (invece di const) otteniamo: Uncaught TypeError: addArrov is not a function perché undefined (viene letta così: undefined(2,3))

// function declaration
function addDecl(a, b) {
  return a + b;
}

// function expression
const addExpr = function (a, b) {
  return a + b;
};

// arrow function
var addArrow = (a, b) => a + b;

// ESEMPIO TRAPPOLA:
console.log(numProducts); // undefined, undefined è anche un false value per cui a causa del sollevamento (hoisting) numProducts è = 0 per cui il carrello viene cancellato
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1; // le variabili dichiarate con var creano una proprietà sull'oggetto window globale
let y = 2;
const z = 3;
// window è l'oggetto globale di JS nel browser
console.log(x === window.x); // true
console.log(x === window.x); // false
console.log(z === window.z); // false
