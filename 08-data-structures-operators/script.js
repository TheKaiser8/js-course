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

/*
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
*/

/*
////////////////////////////////////
// LEZIONE 10: Optional Chaining (?.) (Sez. 9, Lez. 113)
// Introdotto da ES2020

// console.log(restaurant.openingHours.mon); // undefined perché monday non viene specificato negli orari
// console.log(restaurant.openingHours.mon.open); // Uncaught TypeError: restaurant.openingHours.mon is undefined --> non possiamo accedere ad una proprietà non definita

// per ovviare a questo problema creiamo una condizione:
if (restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}

if (restaurant.openingHours.fri) {
  console.log(restaurant.openingHours.fri.open); // 11 perché esiste friday come giorno in openingHours
}

// Se abbiamo oggetti profondamente annidati e con molte proprietà opzionali dovremmo creare diverse condizioni complesse che renderebbero molto meno leggibile il codice:
if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}

// OPTIONAL CHAINING: se una proprietà NON esiste viene restituito immediatamente undefined
console.log(restaurant.openingHours.mon?.open); // se la proprietà 'mon' esiste verrà letta la proprietà 'open', in caso contrario verrà restituito undefined
console.log(restaurant.openingHours?.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']; // 3)
for (const day of days) {
  console.log(day);
  // day non è una proprietà dell'oggetto restaurant.openingHours, pertanto dobbiamo utilizzare la BRACKET NOTATION per utilizzare la variabile day
  // const open = restaurant.openingHours[day]?.open || 'We are closed'; // problema con il valore zero che viene letto come valore falso
  const open = restaurant.openingHours[day]?.open ?? 'closed'; // con NULLISH COALESCING OPERATOR
  console.log(
    `On ${day}, we ${open === 'closed' ? 'are closed' : `open at ${open}`}` // esempio di stringa complessa con template literals all'interno del template literals (ogni condizione deve avere il suo template literals se viene richiamata una variabile)
  );
}

// OPTIONAL CHAINING FOR METHODS:
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist'); // ['Focaccia', 'Pasta']
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist'); // ['Method does not exist']

// OPTIONAL CHAINING FOR ARRAYS:
const users = [
  {
    name: 'Jonas',
    email: 'hello@jonas.io',
  },
];
console.log(users[0]?.name ?? 'User array empty');

// con istruzione if / else sarebbe più lungo e complesso il codice:
if (users.length > 0) {
  console.log(users[0].name);
} else {
  console.log('User array empty');
}
*/

/*
////////////////////////////////////
// LEZIONE 11: Looping Objects: Object Keys, Values, and Entries (Sez. 9, Lez. 114)
const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  // posso calcolare il nome di una proprietà: day-6
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// CICLI SULLE PROPERTY NAMES:

// con il metodo Object.keys otteniamo un array con le chiavi (proprietà) dell'oggetto richiesto:
const properties = Object.keys(openingHours); // è un array su cui si puù eseguire un ciclo
console.log(properties); // ['thu', 'fri', 'sat']

console.log(`Restaurant is open on ${properties.length} days`); // per ottenere il numero di proprietà (n° giorni di apertura)

for (const day of Object.keys(openingHours)) {
  console.log(day); // thu // fri // sat
}

let openStr = `We are open on ${properties.length} days: `; // creo stringa dinamica a cui verrà aggiunta la proprietà iterata

for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// CICLI SULLE PROPERTY VALUES:
const values = Object.values(openingHours); // ottengo un array con i valori
console.log(values);

// Sugli OGGETTI il metodo entries() restituira sia la chiave che il valore dell'oggetto
const entries = Object.entries(openingHours); // ciclo sull'intero oggetto e ottengo un array di array per cui posso fare un ciclo
console.log(entries);

for (const x of entries) {
  console.log(x); // ottengo gli array che si trovano all'intero dell'array entries
}
// [chiave, valore]:
// Possiamo utilizzare chiave e valore di ogni array facendo un ciclo e utilizzando la destrutturazione (in questo caso il valore è rappresentato da un oggetto):
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
*/

/*
////////////////////////////////////
// LEZIONE 12: Sets (Sez. 9, Lez. 116)
// Sets (introdotti in ES6): struttura dati che raccoglie valori unici, un set non può avere duplicati. Sono ITERABILI e sono simili agli array
// *** DIFFERENZA SET e ARRAY: nel SET gli elementi sono UNICI e l'ordine degli elementi è irrilevante come per gli oggetti
const arr = [1, 2, 4, 5];

const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]); // passiamo come argomento un iterabile
console.log(ordersSet); // ['Pasta', 'Pizza', 'Risotto']

// Anche le stringhe sono iterabili:
console.log(new Set('Jonas')); // [ "J", "o", "n", "a", "s" ]

// Ottenere la dimensione di un set (size per SET, length per gli ARRAY):
console.log(ordersSet.size); // 3
console.log(arr.length); // 4

// Controllare se un elemento si trova in un set (has() method) (has per SET, includes per gli ARRAY):
console.log(ordersSet.has('Pizza')); // true
console.log(ordersSet.has('Bread')); // false
console.log(arr.includes(4)); // true
console.log(arr.includes(3)); // false

// Aggiungere nuovi elementi a un set (add per SET, push per gli ARRAY):
console.log(ordersSet.add('Garlic bread')); // [ "Pasta", "Pizza", "Risotto", "Garlic bread" ]

// Eliminare elementi da un set:
ordersSet.delete('Risotto');
console.log(ordersSet); // [ "Pasta", "Pizza", "Garlic bread" ]

// Eliminare (pulire) tutti gli elementi da un set:
// ordersSet.clear();
// console.log(ordersSet); // []

// *** N.B. Se ho bisogno di usare i valori NON utilizzo un SET, ma utilizzo un array perché in un set non ci sono indici e non c'è modo per ottenere i valori

for (const order of ordersSet) console.log(order);

// Caso d'uso principale dei SET: rimuovere valori duplicati da un array
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// esempio: ci interessa sapere i ruoli in un ristorante
const staffUnique = new Set(staff);
console.log(staffUnique); // ['Waiter', 'Chef', 'Manager'];

// Trasformare il SET in un ARRAY (si può fare perché sono entrambi ITERABILI):
const staffUniqueArray = [...new Set(staff)]; // creo un array e decomprimo l'intero set usando lo spread operator che prende tutti gli elementi dall'iterabile e li scrive nell'array separati da virgole
console.log(staffUniqueArray);

// Sapere quante posizioni non duplicate ci sono un array senza crearne uno senza duplicati:
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
); // 3

// Sapere quante lettere non duplicate ci sono in una stringa:
console.log(new Set('Jonasschmedtmann').size); // 11
*/

/*
////////////////////////////////////
// LEZIONE 13: Maps: Fundamentals (Sez. 9, Lez. 117)
// MAPS (introdotte in ES6): struttura dati, molto più utile dei SETS, che possiamo usare per mappare i valori alle chiavi come negli oggetti (chiave: valore)

// *** DIFFERENZA tra MAPS e OGGETTI? Negli oggetti le chiavi sono fondamentalmente sempre stringhe, ma in MAPS le chiavi possono essere anche oggetti, array o altre MAPS

// Come creare una mappa semplicemente:
const rest = new Map(); // creo una mappa vuota
rest.set('name', 'Classico Italiano'); // utilizzare il metodo set(), in cui verrano passati gli argomenti (chiave, valore), per riempire la mappa (metodo set() per aggiungere elementi in MAP, come add per SET)
// Aggiungo 2 sedi del ristorante:
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');

// set() method permette di modificare la mappa e di restituire immediatamente la mappa aggiornata, per cui possiamo concatenere i metodi (CHAINING METHODS)
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');
console.log(rest);

// Leggere i dati da una MAPPA (get() method) passando la chiave che si desidera leggere:
console.log(rest.get('name')); // Classico Italiano
console.log(rest.get(true)); // We are open :D
console.log(rest.get(1)); // Firenze, Italy

const time = 21;
console.log(rest.get(time >= 11 && time < 23 ? true : false));
// il risultato dell'operazione (true or false) sarà mappato su uno dei valori impostati nella mappa è andra a prendere il valore corrispondente a true or false
console.log(rest.get(time >= rest.get('open') && time < rest.get('close')));
// Passaggi dell'operazione mappata:
// console.log(rest.get(true && true));
// console.log(rest.get(true));
// console.log('We are open :D');

// *** N.B. è molto utile avere valori booleani nelle mappe, ma non bisogna abusarne per non avere un codice poco illegibile

// Controllare se una MAPPA CONTIENE una certa chiave:
console.log(rest.has('categories')); // true

// Eliminare un elemento da una mappa attraverso la sua chiave:
rest.delete(2);
console.log(rest);

// Sapere quante POSIZIONI ha la mappa:
console.log(rest.size); // 7

// Eliminare (pulire) tutti gli elementi da una mappa:
// rest.clear();
// console.log(rest); // {}

// ARRAY o OGGETTI come CHIAVI delle MAPPE:
rest.set([1, 2], 'Test');
console.log(rest);
console.log(rest.get([1, 2])); // undefined, perché l'array aggiunto come chiave con il metodo set e questo che stiamo cercando di ottenere NON sono in realtà lo stesso oggetto nell'HEAP
// Per ovviare a questo bisogna creare una variabile di quell'array in modo tale che la memoria di JS faccia sempre riferimento a quella variabile
const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest.get(arr)); // Test

// Questo può essere molto utile con i DOM ELEMENTS che sono un tipo speciale di oggetto:
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
*/

/*
////////////////////////////////////
// LEZIONE 14: Maps: Iteration (Sez. 9, Lez. 118)
// Metodo migliore per popolare una MAPPA:
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again!'],
]);
console.log(question); // la struttura dati è un array composto da array esattamente come la chiamata Object.entries()
console.log(Object.entries(restaurant.openingHours));

// Quindi è un metodo per convertire un OGGETTO in MAPPA:
const hoursMap = new Map(Object.entries(restaurant.openingHours));
console.log(hoursMap);

// Convertire MAPPA in ARRAY:
console.log([...hoursMap]);
console.log([...question]);
// con metodi per ottenere chiave e valore:
console.log([...hoursMap.keys()]); // [ "thu", "fri", "sat" ]
console.log([...hoursMap.values()]);
console.log([...question.keys()]); // [ "question", 1, 2, 3, "correct", true, false ]
console.log([...question.values()]); // [ "What is the best programming language in the world?", "C", "Java", "JavaScript", 3, "Correct 🎉", "Try again!" ]

// QUIZ APP:
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

// const answer = Number(prompt('Your answer:'));
const answer = 3; // variabile per non essere infastiditi dal prompt

// soluzione con blocco if / else:
// if (answer === 3) {
//   console.log(question.get(true));
// } else {
//   console.log(question.get(false));
// }

// soluzione con operatore ternario:
// console.log(
//   question.get('correct') === answer ? question.get(true) : question.get(false)
// );

// soluzione SENZA operatore ternario:
console.log(question.get(question.get('correct') === answer));
*/

//////////////////////////////////
// LEZIONE 15: Summary: Which Data Structure to Use? (Sez. 9, Lez. 119)
// vedi slide

/*
//////////////////////////////////
// LEZIONE 16: Working With Strings - Part 1 (Sez. 9, Lez. 121)
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]); // A
console.log('B737'[1]); // 7, passando direttamente la stringa

console.log(airline.length); // 16
console.log('B737'.length); // 4, passando direttamente la stringa

// Metodi per le stringhe:
// per ottenere la POSIZIONE di una certa LETTERA (la prima che viene trovata):
console.log(airline.indexOf('r')); // 6

// per ottenere la POSIZIONE di una certa LETTERA (l'ultima che viene trovata):
console.log(airline.lastIndexOf('r')); // 10

// per ottenere la POSIZIONE INIZIALE di una certa PAROLA (la prima che viene trovata):
console.log(airline.indexOf('Portugal')); // 8
console.log(airline.indexOf('portugal')); // -1, è CASE SENSITIVE, per cui con la lettera iniziale minuscola non viene trovata la parola e restituisce -1

// SLICE METHOD: estrarre parte di una stringa usando come argomenti gli indici di essa
console.log(airline.slice(4)); // Air Portugal
console.log(airline.slice(4, 7)); // Air, specifichiamo come argomenti: parametro di INIZIO e di FINE (il paramentro di FINE NON INCLUDE la posizione stessa (quindi si ferma all'indice 6))

// Estrarre parola di una stringa NON conoscendo gli indici:
console.log(airline.slice(0, airline.indexOf(' '))); // TAP, trovo l'indice dello spazio vuoto e ottengo l'indice che rappresenta il parametro di FINE della parola
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // Portugal, trovo l'indice dell'ULTIMO spazio vuoto e aggiungo 1 per NON INCLUDERE l'indice dello spazio vuoto come parametro di INIZIO

// Con parametri NEGATIVI posso estrarre partendo dalla FINE della stringa:
console.log(airline.slice(-2)); // al
console.log(airline.slice(1, -1)); // AP Air Portuga, parte da indice 1 e finisce al penultimo indice

// Creo funzione che controlla se il sedile di un aereo si trova in posizione centrale o meno:
const checkMiddleSeat = function (seat) {
  // B e E sono sedili intermedi (centrali)
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log(`${seat} is a middle seat`);
  } else {
    console.log(`${seat} isn't a middle seat`);
  }
};
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

// *** N.B. Le stringhe sono PRIMITIVE per cui non dovrebbero avere metodi disponibili (come invece hanno gli oggetti), però JS riconosce quando viene chiamato un metodo su una stringa è dietro le quinte converte la PRIMITIVA stringa in un OGGETTO STRINGA secondo un processo chiamato BOXING(primitive string --> object string --> string method --> primitive string):
console.log(new String('Jonas')); // processo dietro le quinte di JS (Conversione da primitiva a oggetto)
console.log(typeof new String('Jonas')); // object
console.log(typeof new String('Jonas').slice(1)); // string
*/

//////////////////////////////////
// LEZIONE 17: Working With Strings - Part 2 (Sez. 9, Lez. 122)
const airline = 'TAP Air Portugal';

// Scrivere la stringa in minuscolo (toLowerCase()) o MAIUSCOLO (toUpperCase()):
console.log(airline.toLowerCase()); // tap air portugal
console.log(airline.toUpperCase()); // TAP AIR PORTUGAL
console.log('jonas'.toUpperCase()); // JONAS, direttamente su una stringa

// CORREGGERE un nome:
const passenger = 'jOnAS';
const passengerLower = passenger.toLowerCase();
console.log(passengerLower); // jonas
// Prima lettera in maiuscolo:
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect); // Jonas

// Funzione che passando un nome restituisce il nome con la prima lettera maiuscola (capitalization)
const fixCapitalization = function (name) {
  const nameLower = name.toLowerCase();
  const nameCorrect = nameLower[0].toUpperCase() + nameLower.slice(1);
  console.log(nameCorrect);
};
fixCapitalization('mATTeo');
fixCapitalization('SARa');
fixCapitalization('aldO');

// CONFRONTO EMAIL:
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n'; // \n' per andare a capo

const lowerEmail = loginEmail.toLowerCase();
// rifiniamo la mail eliminando gli spazi vuoti e i caratteri di invio per terminare una riga (trim() method):
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

// Possiamo semplificare il codice creando una sola variabile per ottenere la mail normalizzata:
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

// confronto le 2 email:
console.log(email === normalizedEmail); // true

// Funzione che confronta 2 email (email corretta e email input) e restituisce la mail normalizzata se l'utente ha inserito erroneamente spazi o caratteri di invio all'inizio o alla fine della stringa:
const compareEmail = function (correctEmail, inputEmail) {
  const normalizedEmail = inputEmail.toLowerCase().trim();
  console.log(normalizedEmail);
  if (correctEmail === normalizedEmail) {
    console.log('La mail corrisponde');
  } else {
    console.log('La mail è errata nonostante la normalizzazione');
  }
};
compareEmail('prova@email.com', '\n prova@EMail.Com'); // true, La mail corrisponde
compareEmail('prova@email.com', '   prova@EMail.Com   '); // true, La mail corrisponde
compareEmail('prova@email.com', 'prova @email.com'); // false (non rimuove spazi vuoti all'interno della stringa), La mail è errata nonostante la normalizzazione

// SOSTITUZIONE parti di stringa (REPLACING):
// Singoli caratteri:
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.'); // primo argomento: elemento da sostituire, secondo argomento: sostituto
console.log(priceUS); // 288.97$

// Parole intere:
const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate')); // il metodo replace sostituisce solamente la prima parola che corrisponde, non tutte
console.log(announcement.replaceAll('door', 'gate')); // replaceAll() risolve il problema precedente e sostituisce tutte le parole che corrispondono al primo argomento inserito

// Senza replaceAll() bisogna utilizzare una REGULAR EXPRESSION:
console.log(announcement.replace(/door/g, 'gate')); // dobbiamo mettere la parola da sostituire tra 2 slash e affiancarci il flag g che sta per global

// Metodi che restituiscono BOOLEANI:
let plane = 'A320neo';
console.log(plane.includes('A320')); // true
console.log(plane.includes('neo')); // true
console.log(plane.includes('Boeing')); // false
console.log(plane.startsWith('Air')); // false
plane = 'Airbus A320neo';
console.log(plane.startsWith('Air')); // true

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW Airbus family');
}

// Esercizio controllo bagagli e passeggero:
const checkBaggage = function (items) {
  // è importante trasformare in minuscolo ogni input utente per poter confrontare più facilmente (i metodi delle stringhe sono case sensitive e potrebbero alterare le condizioni di controllo)
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome a board!');
  }
};
checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');
