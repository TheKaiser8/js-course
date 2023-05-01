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

/*
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
*/

/*
////////////////////////////////////
// LEZIONE 3: The this Keyword in Practice (Sez. 8, Lez. 97)

console.log(this); // in global scope è l'oggetto globale window

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this); // in questo caso la keyword this è undefined
};
calcAge(1991);

// con arrow function (non ottiene la keyword this, ma utilizza la lexical this keyword e quindi significa che la utilizza dalla sua funzione genitore):
const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this); // in questo caso la keyword this è l'oggetto globale window
};
calcAgeArrow(1980);

// this keyword all'interno di un metodo:
const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this); // ottiene tutto l'oggetto jonas, punta all'oggetto che sta chiamando il metodo
    console.log(2037 - this.year); // 46
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};
matilda.calcAge = jonas.calcAge; // method borrowing: un oggetto prende in prestito un metodo di un altro oggetto (in questo modo evitiamo la duplicazione di codice)
matilda.calcAge(); // this keyword punta sempre all'oggetto che sta chiamando il metodo, per cui punta all'oggetto matilda in questo caso

// eliminando la funzione dall'oggetto jonas:
const f = jonas.calcAge;
f(); // in questo modo non fa riferimento ad alcun oggetto, pertanto è undefined
*/

/*
////////////////////////////////////
// LEZIONE 4: Regular Functions vs. Arrow Functions (Sez. 8, Lez. 98)
// var firstName = 'Matilda'; // le var creano delle proprietà sull'oggetto globale, pertanto in questo modo la keyword this troverà la variabile firstName e sarà in grado utilizzarla con una arrow function che utilizza la keyword this ***altro motivo per NON USARE VAR

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this); // ottiene tutto l'oggetto jonas, punta all'oggetto che sta chiamando il metodo
    console.log(2037 - this.year); // 46

    // Soluzione 1:
    // const self = this; // creo variabile aggiuntiva self (or that), a questo livello this punta all'oggetto jonas, per cui la proprietà year è leggibile
    // const isMillenial = function () {
    //   // console.log(this);
    //   // console.log(this.year >= 1981 && this.year <= 1996);

    //   // con self:
    //   console.log(self); // jonas object
    //   console.log(self.year >= 1981 && self.year <= 1996); // true
    // };
    // isMillenial(); // all'interno di una chiamata di funzione this keyword è undefined (anche se all'interno di un metodo).
    // // Per ovviare a questo ci sono 2 soluzioni: variabile aggiuntiva self fuori dalla funzione (soluzione prima di ES6) o arrow function

    // Soluzione 2 (con arrow function utilizza la chiave this lessicale, per cui otterrà la proprietà dall'ambito padre, in questo caso il metodo calcAge):
    const isMillenial = () => {
      console.log(this); // jonas object
      console.log(this.year >= 1981 && this.year <= 1996); // true
    };
    isMillenial();
  },

  greet: () => console.log(`Hey ${this.firstName}`), // output: Hey undefined
  // BEST PRACTICE: non utilizzare mai un'ARROW FUNCTION come metodo

  // greet: function () {
  //   console.log(this); // object jonas
  //   console.log(`Hey ${this.firstName}`); // output: Hey Jonas
  // },
};
jonas.greet();
jonas.calcAge();

// Arguments keyword (disponibile solo per le funzioni regolari, NO arrow function):
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 3);
addExpr(2, 3, 7, 10); // posso aggiungere argomenti alla funzione senza specificarne il nome

// arrow function (arguments keyword NOT exists)
var addArrow = (a, b) => {
  console.log(arguments); // arguments is not defined
  return a + b;
};
addArrow(2, 3);
*/

////////////////////////////////////
// LEZIONE 5: Primitives vs. Objects (Primitive vs. Reference Types) (Sez. 8, Lez. 99)
// Primitives sono numeri, stringhe, boolean, undefined, null, symbol, bigInt
let age = 30;
let oldAge = age;
age = 31;
console.log(age); // 31
console.log(oldAge); // 30

const me = {
  name: 'Jonas',
  age: 30,
};

const friend = me;
friend.age = 27;
console.log('Friend:', friend); // age: 27
console.log('Me:', me); // age: 27
// Questo può essere fonte di confusione

// *** N.B. Sono IMMUTABILI solo le const PRIMITIVES non le const REFERENCES, perchè in JS ENGINE, il valore di un'oggetto nella CALL STACK è in realtà l'indirizzo a cui punta nell'HEAP, per cui il valore viene cambiato nell'heap e l'indirizzo di riferimento (quindi il valore nello STACK non cambia)
