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
