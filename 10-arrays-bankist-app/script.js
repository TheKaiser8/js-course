'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/*
//////////////////////////////////
// LEZIONE 1: Simple Array Methods (Sez. 11, Lez. 142)
// RICORDA: I metodi sono funzioni che possiamo chiamare sugli oggetti e gli array sono fondamentalmente oggetti

let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE METHOD:
// estraiamo parte di array con metodo SLICE (creiamo un nuovo array che copia solamente le parti estratte):
console.log(arr.slice(2)); // NON aggiungiamo il parametro di fine perché vogliamo ottenere un'array che inizia dal 3° elemento (indice 2) fino alla fine dell'array --> [ "c", "d", "e" ]
console.log(arr.slice(2, 4)); // il parametro finale NON è incluso --> [ "c", "d" ]
console.log(arr.slice(-2)); // con parametro NEGATIVO inizia a copiare dalla fine dell'array --> [ "d", "e" ]
console.log(arr.slice(-1)); // con -1 come parametro riusciamo a ricavare sempre l'ULTIMO elemento
console.log(arr.slice(1, -2)); // per escludere il primo elemento e gli ultimi 2

// Per creare una SHALLOW COPY (copia superficiale) utilizzo il metodo SLICE o lo SPREAD OPERATOR? Utilizzare il metodo preferito perché entrambi consentono di creare una copia dell'array
console.log(arr.slice()); // [ "a", "b", "c", "d", "e" ]
console.log([...arr]); // [ "a", "b", "c", "d", "e" ]

// SPLICE METHOD:
// A differenza di slice MUTA l'array originale
// console.log(arr.splice(2)); // --> [ "c", "d", "e" ]
// console.log(arr); // --> [ "a", "b" ], gli elementi estratti con il metodo splice non fanno più parte dell'array
// Principalmente splice method si utilizza per eliminare degli elementi da un array
arr.splice(-1); // --> [ "a", "b", "c", "d"] viene eliminato l'ULTIMO elemento
console.log(arr);
arr.splice(1, 2); // --> [ "a", "d"] il 2° parametro rappresenta il numero di elementi da cancellare (deleteCount)
console.log(arr);

// REVERSE METHOD:
// Il metodo REVERSE restituisce l'array INVERSO e, come SPLICE, MUTA l'array originale
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse()); // [ "f", "g", "h", "i", "j" ]
console.log(arr2); // [ "f", "g", "h", "i", "j" ]

// CONCAT METHOD: NON muta l'array originale
const letters = arr.concat(arr2);
console.log(letters); // [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j" ]
// con SPREAD OPERATOR la concatenazione avviene in questo modo:
console.log([...arr, ...arr2]); // [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j" ]

// JOIN METHOD: per scrivere l'array sotto forma di stringa decidendo il separatore
console.log(letters.join(' - '));
*/

/*
//////////////////////////////////
// LEZIONE 2: The new at Method (Sez. 11, Lez. 143)
const arr = [23, 11, 64];

// Ottenere il PRIMO ELEMENTO:
console.log(arr[0]); // valore del primo elemento dell'array --> 23
// con AT method otteniamo la stessa cosa:
console.log(arr.at(0)); // --> 23, come se indicassimo: arr at position zero

// Ottenere l'ULTIMO ELEMENTO:
console.log(arr[arr.length - 1]); // --> 64, ultimo elemento dell'array se non conosciamo la sua posizione
console.log(arr.slice(-1)); // --> Array [ 64 ], otteniamo una copia dell'array con solo l'ultimo elemento
// --> per ottenere il solo valore è sufficiente aggiungere l'indice dopo il metodo slice:
console.log(arr.slice(-1)[0]); // --> 64 con SLICE METHOD
console.log(arr.at(-1)); // --> 64 con AT METHOD

// AT METHOD funziona anche per le STRINGHE:
console.log('jonas'.at(0)); // --> j
console.log('jonas'.at(-1)); // --> s
*/

//////////////////////////////////
// LEZIONE 3: Looping Arrays: forEach (Sez. 11, Lez. 144)
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Soluzione con ciclo FOR-OF:
console.log('-----> ciclo FOR-OF <-----');
for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`); // metodo Math.abs() per prendere il valore assoluto (rimuove il segno)
  }
}

// Per ottenere anche l'INDEX (metodo entries()):
// Nel FOR-OF il 1° elemento nella destrutturazione è l'indice e il 2° l'elemento corrente
console.log('-----> ciclo FOR-OF con INDEX <-----');
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement n° ${i + 1}: you deposited ${movement}`);
  } else {
    console.log(`Movement n° ${i + 1}: you withdrew ${Math.abs(movement)}`); // metodo Math.abs() per prendere il valore assoluto (rimuove il segno)
  }
}

// Soluzione con ciclo FOR-EACH:
// ciclo forEach richiede una funzione di CALLBACK che ha come argomento l'elemento dell'array che viene richiamato ad ogni iterazione
console.log('-----> ciclo FOR-EACH <-----');
movements.forEach(function (movement) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`); // metodo Math.abs() per prendere il valore assoluto (rimuove il segno)
  }
});

// forEach con ARROW FUNCTION come FUNZIONE DI CALLBACK:
console.log(
  '-----> ciclo FOR-EACH con ARROW FUNCTION come FUNZIONE DI CALLBACK <-----'
);
movements.forEach(movement => {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`); // metodo Math.abs() per prendere il valore assoluto (rimuove il segno)
  }
});

// forEach passa anche l'INDEX e l'intero ARRAY:
// *** Come sempre i nomi dei parametri possono essere a piacere, ma è FONDAMENTALE l'ORDINE degli ARGOMENTI PASSATI (1°: elemento corrente. 2°: indice, 3°: intero array)
console.log('-----> ciclo FOR-EACH con INDEX <-----');
movements.forEach(function (movement, index, array) {
  if (movement > 0) {
    console.log(`Movement n° ${index + 1}: you deposited ${movement}`);
  } else {
    console.log(`Movement n° ${index + 1}: you withdrew ${Math.abs(movement)}`); // metodo Math.abs() per prendere il valore assoluto (rimuove il segno)
  }
});

// *** IMPORTANTE: le istruzioni BREAK e CONTINUE NON funzionano con il ciclo FOR-EACH, verrà SEMPRE ESEGUITO il ciclo per intero, per cui se ho necessità di uscire o interrompere il ciclo dovrò utilizzare il ciclo FOR-OF
