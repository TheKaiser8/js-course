'use strict';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  // aggiungo metodo per ordinare cibo:
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]; // restituisco array
  },

  // aggiungo metodo per la consegna dell'ordine (come argomento della funzione passiamo direttamente un intero oggetto):
  // orderDelivery: function (obj) {
  //   console.log(obj);
  // },
  // possiamo eseguire subito la destrutturazione negli argomenti della funzione
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(starterIndex, mainIndex, time, address);
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  // aggiungo metodo per ordinare pasta con esattamente 3 ingredienti:
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  // aggiungo metodo per ordinare pizza con almeno 1 ingrediente, gli altri parametri sono opzionali per cui utilizzo un REST PARAMETER:
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
    const str = `Your pizza with ${mainIngredient} and ${
      otherIngredients.length > 0 ? otherIngredients + ' as' : 'without'
    } additional ingredients`;
    console.log(str);
  },
};

/*
////////////////////////////////////
// LEZIONE 1: Destructuring Arrays (Sez. 9, Lez. 103)
// DESTRUCTURING: funzionalità ES6, è un modo per decomprimere i valori, da un ARRAY o un OGGETTO, in variabili separate. Significa suddividere una struttura dati complessa in una struttura dati più piccola come una variabile.
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// Destructuring array:
const [x, y, z] = arr;
console.log(x, y, z); // ottengo i rispettivi valori di x, y e z
console.log(arr); // non viene modificata la struttura dell'array originale, avviene solo una destrutturazione che ci permette di ottenere i valori desiderati dell'array

const [first, second] = restaurant.categories; // per ottenere i primi 2 elementi dell'array
console.log(first, second); // output: Italian Pizzeria

const [first1, , second1] = restaurant.categories; // per ottenere il primo e il terzo elemento dell'array lascio uno spazio vuoto separato da virgole
console.log(first1, second1); // output: Italian Vegetarian

let [main, , secondary] = restaurant.categories; // cambiato in let per poter invertire i 2 elementi (vedi riga 53)
console.log(main, secondary); // output: Italian Vegetarian

// per invertire il posizionamento di 2 elementi, SENZA destructuring:
// const temp = main; // creo variabile temporanea
// main = secondary;
// secondary = temp;
// console.log(main, secondary); // output: Vegetarian Italian

// inversione posizionamento di 2 elementi, CON destructuring:
[main, secondary] = [secondary, main];
console.log(main, secondary); // output: Vegetarian Italian

console.log(restaurant.order(2, 0)); // ['Garlic Bread', 'Pizza']
const [starter, mainEl] = restaurant.order(2, 0);
console.log(starter, mainEl); // Garlic Bread Pizza

// Destructuring array annidato (nested array):
const nested = [2, 4, [5, 6]];

// Soluzione 1:
// const [i, , j] = nested;
// console.log(i, j); // output: 2 [5, 6]
// const [k, l] = j;
// console.log(k, l); // output: 5 6

// Soluzione 2 (compressa):
const [i, , [j, k]] = nested;
console.log(i, j, k); // output 2 5 6

// destructuring array di cui non conosciamo la lunghezza:
// const [p, q, r] = [8, 9];
// console.log(p, q, r); // output 8 9 undefined
// possiamo definire un valore di default se non presente:
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); // output 8 9 1
*/

/*
////////////////////////////////////
// LEZIONE 2: Destructuring Objects (Sez. 9, Lez. 104)
const { name, openingHours, categories } = restaurant; // utilizziamo i nomi esatti delle proprietà dell'oggetto (l'ordine non è importante perché non è un'array)
console.log(name, openingHours, categories);

// per creare variabili con nome diverso dalle proprietà dell'oggetto:
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// per creare valori di default alle proprietà (array vuoto in questo caso):
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutazioni variabili:
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

// JS si aspetta sempre un blocco se una riga di codice inizia con le parentesi graffe, quindi non possiamo assegnare nulla ad un blocco di codice. Per aggirare questo problema possiamo racchiudere tutto tra parentesi tonde:
({ a, b } = obj); // in questo modo possiamo riassegnare i valori delle variabili utilizzando le proprietò dell'oggetto
console.log(a, b);

// Destructuring oggetti annidati (nested object):
// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

// posso anche riassegnare il nome di queste proprietà dell'oggetto annidato
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

// richiamo metodo creato a riga 36, qui vado a specificare il parametro (che è l'oggetto indicato come argomento nel metodo creato)
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

// con valori di default specificati con il destructuring nell'argomento della funzione
restaurant.orderDelivery({
  address: 'Via del Sole, 21',
});
*/

/*
////////////////////////////////////
// LEZIONE 3: The Spread Operator (...) (Sez. 9, Lez. 105)

// Esempio ESPANSIONE di un ARRAY:
const arr = [7, 8, 9];
// con ciclo for aggiungeremmo cosi 2 valori all'inizio dell'array creando un nuovo array
const newArrayLoop = [1, 2];
for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
  newArrayLoop.push(element);
}
console.log(newArrayLoop); // [ 1, 2, 7, 8, 9 ]

// con SPREAD OPERATOR:
const newArray = [1, 2, ...arr];
console.log(newArray); // [ 1, 2, 7, 8, 9 ]

// inoltre, posso utilizzarlo per registrare i singoli elementi
console.log(...newArray); // 1, 2, 7, 8, 9

// Esempio per espandere il mainMenu dell'oggetto restaurant
const newMenu = [...restaurant.mainMenu, 'Gnocchi'];
console.log(newMenu); // [ "Pizza", "Pasta", "Risotto", "Gnocchi" ]
console.log(...newMenu); // Pizza Pasta Risotto Gnocchi

// *** N.B. La grande differenza tra la DESTRUTTURAZIONE e lo SPREAD OPERATOR è che quest'ultimo prende TUTTI gli elementi dell'array e NON crea nuove variabili, pertanto possiamo usarlo solo dove abbiamo bisogno di scrivere valori separati da virgole

// Copiare un array (SHALLOW COPY):
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy); // [ "Pizza", "Pasta", "Risotto" ]
mainMenuCopy.push('Pane');
console.log(mainMenuCopy); // [ "Pizza", "Pasta", "Risotto", "Pane" ]
console.log(restaurant.mainMenu); // [ "Pizza", "Pasta", "Risotto" ] non modifico l'array originale contenuto nell'oggetto

// Unire 2 array (Join 2 arrays):
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu); // [ "Pizza", "Pasta", "Risotto", "Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad" ]

// *** N.B. Lo SPREAD OPERATOR funziona su tutti gli ITERABILI, ossia cose come ARRAY, STRINGS, MAPS O SETS, ma NON sugli OGGETTI
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters); // [ "J", "o", "n", "a", "s", " ", "S." ]
console.log(...str); // J o n a s

// NON possiamo, però, creare una stringa utilizzando il template literal:
// console.log(`${...str} Schmedtmann`); // NON funziona perché è un posto in cui non si aspetta valori separati da virgola

// richiamo metodo creato a riga 49, qui vado a specificare i 3 parametri (3 ingredienti)
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt("Let's make pasta! Ingredient 2?"),
//   prompt("Let's make pasta! Ingredient 3?"),
// ];
// console.log(ingredients);
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]); // bad solution
// restaurant.orderPasta(...ingredients); // better solution with spread operator

// da ES2018 lo SPREAD OPERATOR funziona anche sugli oggetti che non sono ITERABILI
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Giuseppe' };
console.log(newRestaurant);

// Copiare un oggetto (SHALLOW COPY):
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name); // Ristorante Roma
console.log(restaurant.name); // Classico Italiano
*/

/*
////////////////////////////////////
// LEZIONE 4: Rest Pattern and Parameters (Sez. 9, Lez. 106)

// REST OPERATOR con ARRAY:
// L'operatore REST serve a comprimere gli elementi in un array e fa l'esatto opposto a ciò che fa lo SPREAD OPERATOR (decomprimere un array). Condividono la stessa sintassi

const arr = [1, 2, ...[3, 4]]; // SPREAD OPERATOR perché si trova a DESTRA del = (a destra dell'assegnazione)

const [a, b, ...others] = [1, 2, 3, 4, 5]; // REST OPERATOR perché si trova a SINISTRA del = (a sinistra dell'assegnazione)
console.log(a, b, others); // 1 2 [3, 4, 5]

// utilizzo simultaneo di REST e SPREAD OPERATOR (REST element deve essere sempre l'ultimo elemento e ce ne può essere solamente 1):
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
]; // destrutturo e salvo in variabili il primo e il terzo elemento del mainMenu e raccolgo in un array i restanti cibi
console.log(pizza, risotto, otherFood);

// REST OPERATOR con OGGETTI:
const { sat, ...weekDays } = restaurant.openingHours;
console.log(sat, weekDays);

// FUNZIONI con REST PARAMETERS:
// funzione in grado di sommare gli argomenti passati (numero NON definito di argomenti) che ci permette di passare sia un array (destrutturandolo nella chiamata di funzione) o singoli elementi
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    sum += element;
  }
  console.log(sum);
};
add(2, 3); // 5
add(5, 3, 7, 2); // 17
add(8, 2, 5, 3, 2, 1, 4); // 25

const x = [23, 5, 7];
add(...x); // 35

// richiamo metodo creato a riga 56
restaurant.orderPizza('funghi', 'prosciutto', 'olive'); // funghi ['prosciutto', 'olive']
restaurant.orderPizza('funghi'); // funghi []
*/

/*
////////////////////////////////////
// LEZIONE 5: Short Circuiting (&& and ||) (Sez. 9, Lez. 107)
// Gli operatori logici possono usare qualsiasi tipo di dato e restituire qualsiasi tipo di dato facendo qualcosa chiamato short-circuiting (corto circuito) o short circuit evaluation

// OR OPERATOR (restituisce il primo valore VERO oppure l'ultimo valore se sono tutti FALSI):
console.log('----- OR -----');
console.log(3 || 'Jonas'); // 3, se il primo valore è vero viene restituito immediatamente il primo valore, JS non prende nemmeno in considerazione il secondo valore --> per questo parliamo di SHORT CIRCUITING

console.log('' || 'Jonas'); // Jonas
console.log(true || 0); // true
console.log(undefined || null); // null, perché undefined è un valore FALSO, pertanto si procederà al secondo valore e non ci sarà un short circuiting --> viene preso null (anche se FALSO) perché è l'ultimo valore

console.log(undefined || 0 || '' || 'Hello' || 23 || null); // Hello, perché sarà il primo valore vero di questa catena di operazioni

// restaurant.numGuests = 23; // se impostiamo il valore su 0 otterremo il valore predefinito 10 perchè 0 viene letto come valore falso
// Creo proprietà oggetto restaurant con numero degli ospiti:
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10; // 10 numero predefinito di ospiti
console.log(guests1);

const guests2 = restaurant.numGuests || 10; // se numGuests esiste restituisce il numero di ospiti corrispondente, altrimenti restituisce 10 come valore predefinito
console.log(guests2);

// AND operator (restituisce il primo valore falso oppure l'ultimo valore se sono tutti VERI):
console.log('----- AND -----');
console.log(0 && 'Jonas'); // 0, AND operator va in short circuiting quando il primo valore è FALSO e restituisce immediatamente quel valore
console.log(7 && 'Jonas'); // Jonas, viene restituito l'ultimo valore vero
console.log('Hello' && 23 && null && 'jonas'); // null, è il primo valore falso per cui l'operazione andrà in cortocircuito

// con blocco if / else:
if (restaurant.orderPizza) {
  restaurant.orderPizza('prosciutto', 'funghi');
}
// con AND operator:
restaurant.orderPizza && restaurant.orderPizza('prosciutto', 'funghi');
*/

/*
////////////////////////////////////
// LEZIONE 6: The Nullish Coalescing Operator (??) (Sez. 9, Lez. 108)
// Operatore introdotto in ES2020, che funziona con l'idea di valori NULLI e UNDEFINED, NON valori falsi (NON include zero --> 0 o stringa vuota --> '')
restaurant.numGuests = 0;

const guests = restaurant.numGuests || 10;
console.log(guests); // 10

// Con NULLISH COALESCING OPERATOR:
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect); // 0

// 0 e '' non sono valori nulli o indefiniti
*/

/*
////////////////////////////////////
// LEZIONE 7: Logical Assignment Operators (Sez. 9, Lez. 109)
// Introdotti in ES2021
const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// // Impostiamo un numero predefinito di ospiti se non presente la proprietà numGuests:
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// con l'operatore logico OR di assegnazione (OR ASSIGNMENT OPERATOR) possiamo fare tutto in maniera più concisa:
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// con NULLISH COALESCING ASSIGNMENT OPERATOR per correggere l'errore dello zero visto come una valore falso:
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND ASSIGNMENT OPERATOR:
// Creo stringa per rendere anonimo il proprietario del ristorante
// rest1.owner = rest1.owner && '<ANONYMOUS>'; // undefined
// rest2.owner = rest2.owner && '<ANONYMOUS>'; // <ANONYMOUS>

rest1.owner &&= '<ANONYMOUS>'; // risultato migliore perché NON otteniamo undefined
rest2.owner &&= '<ANONYMOUS>'; // <ANONYMOUS>
console.log(rest1);
console.log(rest2);
*/

/*
////////////////////////////////////
// LEZIONE 8: Looping Arrays: The for-of Loop (Sez. 9, Lez. 111)
// espansione del menu:
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// con ciclo for:
console.log('----- CICLO FOR -----');
for (let i = 0; i < menu.length; i++) {
  const element = menu[i];
  console.log(element);
}

// con ciclo for-of (è ancora possibile l'utilizzo delle parole chiave continue e break):
console.log('----- CICLO FOR-OF -----');
for (const item of menu) console.log(item); // ciclo for-of pensato in origine solo per ottenere l'elemento corrente

// In questo modo possiamo ottenere anche l'indice corrente (viene restituito un array con l'indice dell'elemento e l'elemento stesso):
for (const item of menu.entries()) {
  console.log(item); // [0, 'Focaccia']
  console.log(`${item[0] + 1}: ${item[1]}`); // faccio partire il menu da 1 manualmente
}

// utilizzando la destrutturazione posso ottenere l'indice corrente in modo migliore:
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

// Questo è il motivo per cui iterando l'array menu tramite il metodo entries() ottengo degli array composti da indice ed elemento:
console.log([...menu.entries()]); // espando l'array creandone uno nuovo, quindi ottengo un array che contiene un'array in ogni posizione
*/

////////////////////////////////////
// LEZIONE 9: Enhanced Object Literals (Sez. 9, Lez. 112)
// 3 miglioramenti: 1) potenziato object literal, 2) migliorata e semplificata la scrittura di metodi all'interno di oggetti, 3) è possibile calcolare i nomi delle proprietà oggetto
const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']; // 3)

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  // posso calcolare il nome di una proprietà: day-6
  [`day-${2 + 4}`]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurantExample = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // prima di ES6:
  // openingHours: openingHours, // per avere un oggetto che si trova all'esterno dell'oggetto corrente bisognava dichiarare in questo modo la proprietà

  // con ES6 viene potenziato l'oggetto letterale (object literal):
  openingHours, // viene creata una proprietà oggetto con quell'esatto nome di variabile oggetto che si trova all'esterno

  // metodo di scrittura di un metodo prima di ES6:
  orderPreES6: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]; // restituisco array
  },

  // metodo di scrittura con ES6:
  orderPostES6(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]; // restituisco array
  },
};
console.log('Pre ES6:', restaurantExample.orderPreES6(1, 0));
console.log('Post ES6:', restaurantExample.orderPostES6(1, 0));
