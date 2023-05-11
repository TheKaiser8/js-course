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

//////////////////////////////////
// LEZIONE 5: PROJECT: "Bankist" App (Sez. 11, Lez. 146)
// Spiegazione progetto

//////////////////////////////////
// LEZIONE 6: Creating DOM Elements (Sez. 11, Lez. 147)

// GOOD PRACTICE: Creiamo una funzione a cui passiamo i dati per visualizzare i movimenti bancari invece di creare una variabile globale
const displayMovements = function (movements) {
  // per non avere i movimenti creati di default durante la scrittura dell'HTML svuotiamo il ccntainer dei movimenti
  containerMovements.innerHTML = ''; // .textContent restituisce solo il testo, innerHTML restituisce tutto, HTML incluso

  movements.forEach(function (mov, i) {
    // creiamo variabile per definire la tipologia di movimento
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    // creazione html con template literal:
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;
    // il metodo insertAdjacentHTML() accetta 2 argomenti (positione e testo)
    containerMovements.insertAdjacentHTML('afterbegin', html); // utilizzo afterbegin per fare in modo che l'elemento più recente sia in cima e non al fondo
  });
};
displayMovements(account1.movements);

//////////////////////////////////
// LEZIONE 11: The reduce Method (Sez. 11, Lez. 153)
// Funzione per stampare in pagina il saldo corrente
const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance} €`;
};
calcDisplayBalance(account1.movements);

//////////////////////////////////
// LEZIONE 12: The Magic of Chaining Methods (Sez. 11, Lez. 155)
const calcDisplaySummary = function (movements) {
  // Ottengo le entrate (IN):
  const incomes = movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  console.log(incomes); // 5020
  labelSumIn.textContent = `${incomes}€`;

  // Ottengo le uscite (OUT):
  const out = movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  console.log(out); // -1180
  labelSumOut.textContent = `${Math.abs(out)}€`; // Math.abs() per eliminare il segno negativo ed estrapolare solamente il valore assoluto

  // Ottengo il tasso di interesse (favorevole ad ogni deposito, quindi supponiamo che ogni deposito sia un investimento che fa maturare un tasso di interesse):
  const interest = movements
    .filter(mov => mov > 0)
    .map(dep => (dep * account1.interestRate) / 100) // tasso di interesse in percentuale: 1.2 / 100
    .filter((int, i, arr) => {
      console.log(arr); // [ 2.4, 5.4, 36, 0.84, 15.6 ] il valore 0.84 verrà escluso dal filtro
      return int >= 1;
    }) // aggiungo metodo che rende valido il tasso di interesse solamente se è >= 1
    .reduce((acc, int) => acc + int, 0);
  console.log(interest);
  labelSumInterest.textContent = `${interest}€`;
};
calcDisplaySummary(account1.movements);

//////////////////////////////////
// LEZIONE 9: Computing Usernames (Sez. 11, Lez. 151)

// Calcolo l'username ottenendo le iniziali del nome utente
const user = 'Steven Thomas Williams';
// con SPLIT method ottengo un array con le parole che compongono il nome, per cui posso utilizzare i metodi per fare i cicli sull'array: MAP method --> ciclo sull'array e ottengo un array di lettere (la prima lettera di ogni parola), JOIN method per unire le lettere e formare la stringa come username
// const username = user
//   .toLowerCase()
//   .split(' ')
//   .map(function (name) {
//     return name[0];
//   })
//   .join('');
// console.log(username); // stw

// con ARROW FUNCTION come funzione di CALLBACK:
const usernameTest = user
  .toLowerCase()
  .split(' ')
  .map(name => name[0])
  .join('');
console.log(usernameTest); // stw

// con ciclo FOR-OF lo faremmo in questo modo
// const username = user.toLowerCase().split(' ');

// let usernameCorrect = '';
// for (const name of username) {
//   usernameCorrect += name[0];
// }
// console.log(usernameCorrect); // stw

// Creo funzione che riceve il nome completo di un utente per CREARE USERNAME:
// const createUsernames = function (user) {
//   const username = user
//     .toLowerCase()
//     .split(' ')
//     .map(name => name[0])
//     .join('');
//   return username;
// };
// console.log(createUsernames(account1.owner));
// console.log(createUsernames(account2.owner));
// console.log(createUsernames(account3.owner));
// console.log(createUsernames(account4.owner));

// Creo funzione che riceve tutti gli account per CREARE la proprietà USERNAME:
const createUsernames = function (accs) {
  // NON vogliamo creare un nuovo array, ma modificare quello già esistente, per cui utilizziamo il FOR-EACH:
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
  // non restituiamo nulla perché stiamo solamente modificando un oggetto, ossia creando un effetto collaterale, e NON stiamo creando un nuovo valore da restituire
};
createUsernames(accounts);
console.log(accounts);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

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

/*
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
*/

/*
//////////////////////////////////
// LEZIONE 4: forEach With Maps and Sets (Sez. 11, Lez. 145)
const currencies = new Map([
  ['USD', 'United States dollar'], // rappresentano: [key, value]
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// ARGOMENTI FOREACH con MAPS: 1°: valore, 2°: chiave, 3°: map
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// ARGOMENTI FOREACH con SETS: un set non ha chiavi, ma gli argomenti da passare rimangono gli stessi con lo stesso ordine per evitare confusione (utilizziamo l'underscore come variabile usa e getta (non necessaria) come nome del 2° argomento)
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR']); // creo il set
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});
*/

//////////////////////////////////
// LEZIONE 7: Data Transformations: map, filter, reduce (Sez. 11, Lez. 149)
// Vedi slide

/*
//////////////////////////////////
// LEZIONE 8: The map Method (Sez. 11, Lez. 150)
// Map method è un altro modo per eseguire un ciclo su un array ma creando un nuovo array

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Supponiamo che i valori siano espressi in € e vogliamo convertirli in $:
const eurToUsd = 1.1; // tasso di conversione

// con MAP method (è più orientato verso la PROGRAMMAZIONE FUNZIONALE):
// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd; // ad ogni iterazione restituiamo questo calcolo
// });
// con ARROW FUNCTION, avendo una sola istruzione, possiamo diminuire la quantità di codice :
const movementsUSD = movements.map(mov => mov * eurToUsd);

console.log(movements); // l'array originale non viene cambiato
console.log(movementsUSD); // map method restituisce un nuovo array

// con FOR-OF loop:
const movementsUSDforOf = [];
for (const mov of movements) {
  const movUSD = mov * eurToUsd;
  movementsUSDforOf.push(movUSD);
}
console.log(movementsUSDforOf);

// Vogliamo ottenere un array contenente tutte le stringhe (restituiamo il valore della stringa):
// const movementsDescriptions = movements.map((mov, i) => {
//   if (mov > 0) {
//     return `Movement n° ${i + 1}: you deposited ${mov}`;
//   } else {
//     return `Movement n° ${i + 1}: you withdrew ${Math.abs(mov)}`; // metodo Math.abs() per prendere il valore assoluto (rimuove il segno)
//   }
// });

// REFACTORING (con l'operatore ternario posso restituire implicitamente il valore della ARROW FUNCTION):
const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement n° ${i + 1}: you ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);
console.log(movementsDescriptions);
*/

/*
/////////////////////////////////
// LEZIONE 10: The filter Method (Sez. 11, Lez. 152)
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// con FILTER method:
const deposits = movements.filter(function (mov) {
  return mov > 0; // depositi sono i movimenti con valore maggiore di 0
});
console.log(deposits); // [ 200, 450, 3000, 70, 1300 ]

// con FOR-OF loop:
const depositForLoop = [];
for (const mov of movements) if (mov > 0) depositForLoop.push(mov);
console.log(depositForLoop); // [ 200, 450, 3000, 70, 1300 ]

// *** La grande DIFFERENZA tra usare un ciclo FOR e un METODO come FILTER è che nel secondo caso, oltre ad essere una programmazione di tipo funzionale, è possibile concatenare più metodi

// ottengo i prelevamenti (withdrawals):
const withdrawals = movements.filter(mov => mov < 0); // con ARROW FUNCTION
console.log(withdrawals); // [ -400, -650, -130 ]
*/

/*
//////////////////////////////////
// LEZIONE 11: The reduce Method (Sez. 11, Lez. 153)
// Metodo REDUCE per ridurre gli elementi di un array ad un singolo valore
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Otteniamo il saldo (balance) del conto:
// REDUCE method accetta come 1° argomento una funzione di callback leggermente diversa dalle altre (come 1° parametro, la funzione di CALLBACK, accetta un accumulatore) e come 2° argomento il valore iniziale dell'accumulatore
// const balance = movements.reduce(function (acc, curr, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + curr;
// }, 0);
// console.log(balance); // 3840

// con ARROW FUNCTION:
const balance = movements.reduce((acc, curr, i, arr) => acc + curr, 0);
console.log(balance); // 3840

// con FOR-OF loop:
let balance2 = 0;
for (const mov of movements) {
  balance2 += mov;
}
console.log(balance2); // 3840

// N.B. REDUCE method ci permette di evitare di dichiarare una variabile extra e di restituire il valore direttamente

// Ottenere valore MAX di un array:
const maxValue = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]); // movements[0] è il valore iniziale dell'accumulatore (il primo elemento dell'array, quindi 200 in questo caso)
console.log(maxValue); // 3000

// *** REDUCE method è probabilmente il metodo per gli array più potente che esista
*/

/*
//////////////////////////////////
// LEZIONE 12: The Magic of Chaining Methods (Sez. 11, Lez. 155)
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Supponiamo di voler prendere tutti i movimenti di deposito, di convertirli da € a $ e infine di sommarli per sapere quanto è il deposito sul conto in $:
const eurToUsd = 1.1; // tasso di conversione

// PIPELINE (sequenza di istruzioni a cascata)
const totalDepositUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(`${totalDepositUSD.toFixed(2)} $`);

// *** N.B. Si possono concatenare metodi purché restituiscano un array, il metodo REDUCE restituisce un valore, per cui non avremmo potuto concatenare un altro metodo

// Il DEBUG di una pipeline può essere più complicato, per cui si possono utilizzare gli argomenti dei metodi per fare DEBUGGING:
const testDebug = movements
  .filter(mov => mov < 0)
  .map((mov, i, arr) => {
    console.log(arr);
    return mov * eurToUsd;
  })
  .reduce((acc, mov) => acc + mov, 0);
console.log(`${testDebug.toFixed(2)} $`);

// *** N.B. Avere accesso all'array (arr) corrente ci permette di controllare il risultato dell'operazione precedente (del filter method in questo caso)

// *** Il CHAINING dei METODI è molto utile ma NON bisogna ABUSARNE. Concatenare più metodi in array molto grandi può causare problemi di performance (ottenere la funzionalità richiesta concatenando il minor numero di metodi possibile). Inoltre, è BAD PRACTICE concatenare metodi che mutano l'array originale sottostante (esempio: metodi splice e reverse)
*/
