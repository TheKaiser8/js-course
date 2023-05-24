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
const displayMovements = function (movements, sort = false) {
  // per non avere i movimenti creati di default durante la scrittura dell'HTML svuotiamo il ccntainer dei movimenti
  containerMovements.innerHTML = ''; // .textContent restituisce solo il testo, innerHTML restituisce tutto, HTML incluso

  // creiamo una variabile che ordini i movimenti in base alla variabile sort (true or false) e utilizziamo il metodo slice per creare una copia dell'array movements, in quanto NON vogliamo mutare l'array originale
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
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

//////////////////////////////////
// LEZIONE 11: The reduce Method (Sez. 11, Lez. 153)
// Funzione per stampare in pagina il saldo corrente
const calcDisplayBalance = function (acc) {
  // Creo proprietà sull'intero oggetto account per poter accedere al saldo corrente anche all'esterno della funzione
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} €`;
};

//////////////////////////////////
// LEZIONE 12: The Magic of Chaining Methods (Sez. 11, Lez. 155)
const calcDisplaySummary = function (acc) {
  // Ottengo le entrate (IN):
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  // console.log(incomes); // 5020
  labelSumIn.textContent = `${incomes}€`;

  // Ottengo le uscite (OUT):
  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  // console.log(out); // -1180
  labelSumOut.textContent = `${Math.abs(out)}€`; // Math.abs() per eliminare il segno negativo ed estrapolare solamente il valore assoluto

  // Ottengo il tasso di interesse (favorevole ad ogni deposito, quindi supponiamo che ogni deposito sia un investimento che fa maturare un tasso di interesse):
  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(dep => (dep * acc.interestRate) / 100) // tasso di interesse in percentuale, esempio: 1.2 / 100
    .filter((int, i, arr) => {
      // console.log(arr); // [ 2.4, 5.4, 36, 0.84, 15.6 ] il valore 0.84 verrà escluso dal filtro
      return int >= 1;
    }) // aggiungo metodo che rende valido il tasso di interesse solamente se è >= 1
    .reduce((acc, int) => acc + int, 0);
  // console.log(interest);
  labelSumInterest.textContent = `${interest}€`;
};

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
// console.log(usernameTest); // stw

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
// console.log(accounts);

//////////////////////////////////
// LEZIONE 14: Implementing Login (Sez. 11, Lez. 158)

// Creo funzione per racchiudere tutte le funzioni che aggiornano l'UI:
const updateUI = function (acc) {
  // Mostro movimenti
  displayMovements(acc.movements);

  // Mostro saldo corrente
  calcDisplayBalance(acc);

  // Mostro sommario
  calcDisplaySummary(acc); // devo passare come parametro l'intero account perché oltre ai movimenti ho bisogno del tasso di interesse
};

// Event handler:
let currentAccount; // creiamo variabile al di fuori della funzione perché abbiamo bisogno di sapere l'account utilizzato anche per altre operazioni oltre a quella di login

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();
  console.log('LOGIN'); // il pulsante è un elemento del form per cui avviene di default la ricarica della pagina al submit del form, per NON avere questo comportamento dobbiamo prevenire il comportamento degli eventi predefiniti aggiungendo l'evento come parametro della funzione di CALLBACK per ottenere l'accesso all'oggetto evento

  // *** Se ci troviamo in uno dei campi input del form la pressione del tasto INVIO scatenerà automaticamente l'evento click sul pulsante submit del form

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  // con l'optional chaining possiamo controllare se l'account esiste prima di leggere la proprietà pin
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Mostro UI e messaggio di benvenuto
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`; // Utilizzo metodo split per ottenere solo il nome
    containerApp.style.opacity = 100;

    // Pulisco campi input:
    // inputLoginUsername.value = '';
    // inputLoginPin.value = '';
    // OPPURE in una riga sola:
    inputLoginUsername.value = inputLoginPin.value = ''; // perché assignment operator va da DX verso SX
    // Togliere il focus (non risultano attivi) ai campi input (blur method) una volta effettuato il login:
    inputLoginUsername.blur();
    inputLoginPin.blur();

    // // Mostro movimenti
    // displayMovements(currentAccount.movements);

    // // Mostro saldo corrente
    // calcDisplayBalance(currentAccount.movements);

    // // Mostro sommario
    // calcDisplaySummary(currentAccount); // devo passare come parametro l'intero account perché oltre ai movimenti ho bisogno del tasso di interesse

    // Richiamo funzione (creata per non duplicare codice delle funzioni soprastanti)
    updateUI(currentAccount);
  }
});

//////////////////////////////////
// LEZIONE 15: Implementing Transfers (Sez. 11, Lez. 159)
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('TRANSFER');

  // creo variabile per salvare l'importo di denaro da trasferire
  const amount = Number(inputTransferAmount.value);
  // creo variabile per salvare l'utente a cui trasferire l'importo
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  console.log(amount, receiverAcc);

  // Puliamo i campi input (a prescindere dal successo dell'operazione di trasferimento):
  inputTransferTo.value = inputTransferAmount.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // console.log('Transfer valid');
    // Effettuiamo il trasferimento:
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Aggiorniamo l'interfaccia utente:
    updateUI(currentAccount);
  }
});

//////////////////////////////////
// LEZIONE 17: some and every (Sez. 11, Lez. 161)
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  // Il prestito è concesso se c'è almeno un deposito che è uguale o maggiore del 10% del prestito richiesto
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Aggiungo prestito (come deposito)
    currentAccount.movements.push(amount);
  }

  // Aggiorniamo l'interfaccia utente:
  updateUI(currentAccount);

  // Puliamo i campi input (a prescindere dal successo dell'operazione):
  inputLoanAmount.value = '';
});

//////////////////////////////////
// LEZIONE 16: The findIndex Method (Sez. 11, Lez. 160)
// Funziona come find method, ma invece che restituire l'elemento trovato restituisce l'indice dell'elemento stesso
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const currentAccIndex = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    // Cancello account:
    accounts.splice(currentAccIndex, 1);
    console.log(accounts);

    // Nascondo UI e cambio messaggio di benvenuto (messaggio generale):
    containerApp.style.opacity = 0;
    labelWelcome.textContent = 'Log in to get started';
  }

  inputCloseUsername.value = inputClosePin.value = ''; // svuoto campi input
});

//////////////////////////////////
// LEZIONE 19: Sorting Arrays (Sez. 11, Lez. 163)
// Variabile di stato per controllare se i dati sono stati ordinati o meno:
let sorted = false;

// Ordinare i movimenti in ordine crescente (nella visualizzazione avremo il valore più grande come primo, ma risulterà come l'ultimo movimento effettuato)
btnSort.addEventListener('click', function (e) {
  e.preventDefault();

  // Soluzione NON ottimizzata:
  // if (sorted) {
  //   displayMovements(currentAccount.movements, false);
  //   sorted = false;
  // } else {
  //   displayMovements(currentAccount.movements, true);
  //   sorted = true;
  // }

  // Soluzione OTTIMIZZATA:
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted; // la variabile di stato assume TRUE o FALSE in base al valore del 2° parametro della funzione di callback
});

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

/*
//////////////////////////////////
// LEZIONE 13: The find Method (Sez. 11, Lez. 157)
// Find method permette di trovare un elemento in un array
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// come filter method, anche FIND method ha bisogno di una funzione di callback che ritorna un booleano (il risultato della condizione è vero o falso)
// *** A DIFFERENZA di filter method, FIND method non restituirà un nuovo array, ma restituirà solo il primo elemento nell'array che soddisfa la condizione specificata
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(firstWithdrawal); // -400

// FILTER restituisce un nuovo array con tutti gli elementi che soddisfano una data condizione
// FIND restituisce solamente il primo elemento di un array che soddisfa una data condizione

// FIND method è molto utile per ottenere dati in un array di oggetti
// Supponiamo di voler ottenere un oggetto specifico mediante il nome del proprietario:
const account = accounts.find(acc => acc.owner === 'Jessica Davis'); // in questo caso acc non sta per accumulatore ma per account!!!
console.log(account); // Object { owner: "Jessica Davis", movements: (8) […], interestRate: 1.5, pin: 2222, username: "jd" }

// Challenge con ciclo FOR-OF:
for (const account of accounts) {
  if (account.owner === 'Jessica Davis') console.log(account);
}
*/

/*
//////////////////////////////////
// LEZIONE 17: some and every (Sez. 11, Lez. 161)
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// SOME METHOD
// Utilizzo includes method per verificare se un array include un certo valore (VERIFICA solamente l'UGUAGLIANZA):
console.log(movements.includes(-130)); // true
// con some method:
console.log(movements.some(mov => mov === -130)); // true

// Se vogliamo VERIFICARE una CONDIZIONE dobbiamo utilizzare some method:
// in questo caso verifichiamo la presenza di depositi (movimenti positivi)
const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits); // true

// EVERY METHOD
// Restituisce TRUE solamente se tutti gli elementi di un array soddisfano la condizione specificata
console.log(movements.every(mov => mov > 0)); // false
console.log(account4.movements.every(mov => mov > 0)); // true, l'account 4 ha solo movimenti positivi, pertanto soddisfa la condizione data

// SEPARARE LA FUNZIONE DI CALLBACK
const deposit = mov => mov > 0; // creiamo una variabile separata con la funzione di CALLBACK
console.log(movements.some(deposit)); // true
console.log(movements.every(deposit)); // false
console.log(movements.filter(deposit)); // [ 200, 450, 3000, 70, 1300 ]
*/

/*
//////////////////////////////////
// LEZIONE 18: flat and flatMap (Sez. 11, Lez. 162)
// Introdotti in ES2019
const arrNested = [[1, 2, 3], [4, 5, 6], 7, 8];
// FLAT METHOD (NO CALLBACK function come argomento): per creare un unico array con tutti gli elementi, viene definito flat perché appiatisce gli array annidati di 1 solo livello di annidamento
console.log(arrNested.flat()); // [ 1, 2, 3, 4, 5, 6, 7, 8 ]

// Nell'argomento del metodo flat possiamo specificare il livello di profondità (di DEFAULT è 1)
const arrDeepNested = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeepNested.flat()); // [ [1, 2], 3, 4, [5, 6], 7, 8 ]
console.log(arrDeepNested.flat(2)); // [ 1, 2, 3, 4, 5, 6, 7, 8 ]

// Immaginiamo di voler calcolare il bilancio complessivo di tutti i conti corrente:
// creo un array globale, con il metodo map, che contiene tutti i movimenti bancari
const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements);
// Essendo un array annidato, con FLAT METHOD, creo un array con tutti i movimenti:
const allMovements = accountMovements.flat();
console.log(allMovements);
// Ottengo la somma dei movimenti bancari con il metodo reduce:
const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance); // 17840

// Possiamo utilizzare anche il CHAINING dei METODI:
const overallBalChaining = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalChaining); // 17840

// FLATMAP METHOD: unisce i 2 metodi FLAT e MAP  e migliora le prestazioni
const overallBalChaining2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalChaining); // 17840

// *** N.B. FLATMAP va giù solo di un livello di profondità (per cui in situazione di array annidati in profondità devo utilizzare FLAT METHOD + MAP METHOD)
*/

/*
//////////////////////////////////
// LEZIONE 19: Sorting Arrays (Sez. 11, Lez. 163)
// Sorting: ORDINAMENTO ELEMENTI

// Con le STRINGHE:
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
// Dalla A alla Z:
console.log(owners.sort()); // [ "Adam", "Jonas", "Martha", "Zach" ]
console.log(owners); // il metodo sort MUTA l'array originale

// Con i NUMERI:
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// SORT METHOD converte i numeri in stringhe e poi utilizza l'ordine alfabetico
console.log(movements.sort()); // [ -130, -400, -650, 1300, 200, 3000, 450, 70 ] NON è il risultato aspettato ma ha senso perchè ordina prima i negativi e parte dalla cifra iniziale di ogni numero quindi 1

// per FIXARE il problema sopra bisogna passare una funzione di CALLBACK al metdo SORT:
// SE RETURN < 0 --> A prima di B (mantiene ordine)
// SE RETURN > 0 --> B prima di A (cambia ordine, scambia i 2 numeri)
// ORDINE CRESCENTE:
movements.sort((a, b) => {
  if (a > b) return 1; // NON è importante il numero da restituire, l'importante è che sia > 0
  if (a < b) return -1;
}); // supponiamo che A e B siano 2 numeri consecutivi
// Otteniamo array MUTATO in ORDINE NUMERICO
console.log(movements); // [ -650, -400, -130, 70, 200, 450, 1300, 3000 ]

// ORDINE DECRESCENTE:
movements.sort((a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
});
console.log(movements); // [ 3000, 1300, 450, 200, 70, -130, -400, -650 ]

// *** N.B. A > B significa anche A - B > 0, quindi ritorniamo un valore POSITIVO, mentre A - B < 0 ritorna un valore NEGATIVO

// Possiamo ridurre la quantità di codice in questo modo:
// ORDINE CRESCENTE:
movements.sort((a, b) => a - b);
console.log(movements); // [ -650, -400, -130, 70, 200, 450, 1300, 3000 ]

// ORDINE DECRESCENTE:
movements.sort((a, b) => b - a);
console.log(movements); // [ 3000, 1300, 450, 200, 70, -130, -400, -650 ]

// *** N.B. NON utilizzare SORT method con array MISTI (STRINGHE e numeri) perché non avrebbe senso e non funzionerebbe
*/

/*
//////////////////////////////////
// LEZIONE 20: More Ways of Creating and Filling Arrays (Sez. 11, Lez. 164)
// Modi imparati finora per CREARE ARRAY MANUALMENTE:
console.log([1, 2, 3, 4, 5, 6, 7]);
console.log(new Array(1, 2, 3, 4, 5, 6, 7)); // utilizzando un costruttore

// CREARE ARRAY in MODO PROGRAMMATICO:
// 1: ARRAY CONSTRUCTOR FUNCTION
const arr = new Array(7);
console.log(arr); // [ <7 empty slots> ] otteniamo un array che ha come lunghezza 7 ma non contiene valori
console.log(arr.map(() => 5)); // [ <7 empty slots> ] non funziona alcun metodo per riempirlo, eccetto 1
// per riempirlo possiamo utilizzare solo FILL method (esempio: per riempirlo impostiamo un numero come parametro)
console.log(arr.fill(5)); // [ 5, 5, 5, 5, 5, 5, 5 ]
// FILL method MUTA array originale:
console.log(arr); // [ 5, 5, 5, 5, 5, 5, 5 ]

// Possiamo specificare anche l'indice da cui far partire e/o finire il riempimento (2° e 3° parametro del metodo fill) come avviene per il metodo slice()
const arrFillIndex = new Array(7);
arrFillIndex.fill(5, 3, 6);
console.log(arrFillIndex); // [ <3 empty slots>, 5, 5, 5, <1 empty slot> ]

// MODIFICARE array ESISTENTE:
const arrToEdit = [1, 2, 3, 4, 5, 6, 7];
console.log(arrToEdit.fill(23, 2, 6)); // [ 1, 2, 23, 23, 23, 23, 7 ]

// 2: FROM method su ARRAY CONSTRUCTOR per ricreare un array come questo [ 1, 1, 1, 1, 1, 1, 1 ] e questo [1, 2, 3, 4, 5, 6, 7]
// 1° ARGOMENTO: oggetto lunghezza array, 2° ARGOMENTO: funzione di CALLBACK del metodo MAP
const arrFromOnly1 = Array.from({ length: 7 }, () => 1);
console.log(arrFromOnly1); // [ 1, 1, 1, 1, 1, 1, 1 ]

// const arr1to7 = Array.from({ length: 7 }, (cur, i) => i + 1);
const arr1to7 = Array.from({ length: 7 }, (_, i) => i + 1); // _ come 1° parametro per indicare che non lo utilizziamo (carattere convenzionale)
console.log(arr1to7); // [ 1, 2, 3, 4, 5, 6, 7 ]

// Array composto da 100 numeri casuali (esempio array composto dal risultato del lancio di dadi)
const numbersRandom1to100 = Array.from(
  { length: 100 },
  cur => (cur = Math.floor(Math.random() * 100) + 1)
);
console.log(numbersRandom1to100.sort((a, b) => a - b)); // ordinare i numeri presenti da 1 a 100

// Supponiamo di non avere i dati dei movimenti bancari e di doverli ottenere dalla UI cliccando (a scopo d'esempio sul bilancio corrente):
labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    // il risultato di querySelectorAll è un NodeList (una struttura SIMILE ad un array ma NON è un array), ma con Array.from() possiamo trasformarlo in un vero array
    document.querySelectorAll('.movements__value'),
    // possiamo passare come 2° argomento la funzione di callback
    el => Number(el.textContent.replace('€', ''))
  );

  console.log(movementsUI); // [ 1300, 70, -130, -650, 3000, -400, 450, 200 ]

  // // Possiamo utilizzare MAP method perché abbiamo già convertito i valori presenti nell'HTML in un vero array con Array.from()
  // console.log(movementsUI.map(el => Number(el.textContent.replace('€', '')))); // [ 1300, 70, -130, -650, 3000, -400, 450, 200 ]

  // Utilizzando SPREAD OPERATOR la mappatura avverrebbe separatamente:
  const movementsUI2 = [...document.querySelectorAll('.movements__value')];
  console.log(movementsUI2.map(el => Number(el.textContent.replace('€', '')))); // [ 1300, 70, -130, -650, 3000, -400, 450, 200 ]
});

// *** N.B. Con Array.from() il 1° argomento può essere un NodeList e il 2° una funzione di callback come MAP method
*/

//////////////////////////////////
// LEZIONE 21: Array Methods Practice (Sez. 11, Lez. 166)

// ESERCIZIO 1. Calcolare quanto è stato depositato in banca (tutti gli account):
// const bankDepositSum = accounts.map(acc => acc.movements).flat(); // MAP method per creare un NUOVO array annidato con tutti i depositi, FLAT method per ottenere un array unico ed eliminare gli array annidati
// Possiamo semplificare utilizzando FLATMAP method
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0) // FILTRO per ottenere solo i depositi
  .reduce((acc, cur) => acc + cur, 0);
console.log(bankDepositSum); // 25180

// ESERCIZIO 2. Calcolare i depositi con almeno 1000 € (o $)
// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length; // utilizzando la LUNGHEZZA dell'array

const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  // .reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0); // utilizzando REDUCE method
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0); // ++ OPERATOR come PREFISSO
console.log(numDeposits1000); // 6

// ++ OPERATOR:
let a = 10;
console.log(a++); // 10, esegue l'incremento ma restituisce il valore precedente
console.log(a); // 11, l'incremento a questo punto è stato eseguito e restituisce il valore corretto
// per ovviare a questo problema utilizzo ++ OPERATOR come prefisso:
let prefixOperator = 10;
console.log(++prefixOperator); // 11
console.log(prefixOperator); // 11

// ESERCIZIO 3. Creare un oggetto che contiene la somma dei depositi e dei prelevamenti
const sums = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      return sums; // avendo le parentesi graffe dobbiamo esplicitare la keyword RETURN per far sì che restituisca l'ACCUMULATORE
    },
    { deposits: 0, withdrawals: 0 }
  ); // come valore di partenza imposto un OGGETTO con proprietà e valori di partenza
console.log(sums); // { deposits: 25180, withdrawals: -7340 }

// DESTRUTTURO l'oggetto per ottenere le 2 variabili che contengono i 2 valori calcolati
const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur); // con DOT NOTATION abbiamo più ripetizione di codice
      sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur; // con BRACKET NOTATION possiamo evitare la duplicazione di codice

      return sums; // avendo le parentesi graffe dobbiamo esplicitare la keyword RETURN per far sì che restituisca l'ACCUMULATORE
    },
    { deposits: 0, withdrawals: 0 }
  ); // come valore di partenza imposto un OGGETTO con proprietà e valori di partenza
console.log(deposits, withdrawals); // 25180 -7340

// ESERCIZIO 4: creare funzione per convertire qualsiasi stringa con la prima lettera in maiuscolo (TITLE CASE: tutte le parole con la prima lettere maiuscola eccetto alcune)
// this is a nice title --> This Is a Nice Title
const convertTitleCase = function (title) {
  // creo array con le parole d'eccezione
  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

  // 1) trasformo tutto il titolo in minuscolo (toLowerCase())
  // 2) lo salvo come un array contenente tutte le parole (split(' '))
  // 3) creo un nuovo array con la stessa dimensione di prima (MAP METHOD)
  //  3.1) controllo con INCLUDES se la parola si trova nell'array delle eccezioni
  //  3.2) se è INCLUSA restituisco la parola minuscola, ALTRIMENTI restituisco la parola con la prima lettera maiuscola
  // 4) creo la stringa unendo le parole contenute nell'array con JOIN METHOD
  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word =>
      exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(' ');
  return titleCase;
};
console.log(convertTitleCase('this is a nice title')); // This Is a Nice Title
console.log(convertTitleCase('this is a LONG title but not too long')); // This Is a Long Title but Not Too Long
console.log(convertTitleCase('and here is another title with an EXAMPLE')); // and Here Is Another Title with an Example

// --> per EVITARE una situazione come questa: "and Here Is Another Title with an Example", in cui la prima parola del titolo risulta minuscola poiché presente nelle ECCEZIONI, creo una funziona autonoma
const convertTitleCaseFixed = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);

  // creo array con le parole d'eccezione
  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    .join(' ');
  return capitalize(titleCase);
};
console.log(convertTitleCaseFixed('and here is another title with an EXAMPLE')); // And Here Is Another Title with an Example
