'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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
// Functions

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov.toFixed(2)}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);

  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/*
//////////////////////////////////
// LEZIONE 1: Converting and Checking Numbers (Sez. 12, Lez. 170)

// In JS tutti i numeri sono presentati internamente con la virgola, infatti:
console.log(23 === 23.0); // true

// In JS i numeri sono presentati in BASE BINARIA (0 e 1) o BASE 2, per cui alcune frazioni sono più complicate da rappresentare NON utilizzando il sistema in base 10 (da 0 a 9). Infatti otteniamo risultati strani:
console.log(0.1 + 0.2); // 0.30000000000000004
// ERRORI che dobbiamo accettare in JS a causa dell'utilizzo della BASE BINARIA:
console.log(0.1 + 0.2 === 0.3); // false

// *** Con JS NON è possibile effettuare calcoli SCIENTIFICI o FINANZIARI molto precisi

// CONVERTIRE STRINGA in NUMERO:
console.log(Number('23'));
console.log(+'23'); // Conversione automatica con l'operatore + (TYPE COERCION)
// *** potrei sostituire il costruttore Number con l'operatore + in tutte le parti del progetto

// PARSING: analisi di un numero da una stringa
// Number è una FUNZIONE, ogni FUNZIONE è anche un OGGETTO, per cui possiamo utilizzare il metodo parseInt
console.log(Number.parseInt('30px')); // 30, JS con il parsing riesce ad ottenere il numero contenuto nella stringa se questa inizia con un numero
console.log(Number.parseInt('px30')); // NaN

// parseInt (analizza i numeri INTERI) accetta come 2° argomento una REGEX, in questo caso la base del sistema numerico utilizzato che di default è in base 10:
console.log(Number.parseInt('30px', 10)); // 30

// parseFloat analizza i numeri DECIMALI:
console.log(Number.parseFloat('2.5rem')); // 2.5
console.log(Number.parseInt('2.5rem')); // 2

// *** parseInt e parseFloat sono le cosidette GLOBAL FUNCTION che nel JS tradizionale venivano chiamate senza l'oggetto Number:
console.log(parseFloat('2.5rem')); // 2.5

// isNaN: verificare se è un NON NUMERO
console.log(Number.isNaN(20)); // false
console.log(Number.isNaN('20')); // false
console.log(Number.isNaN(+'20X')); // true
console.log(Number.isNaN(23 / 0)); // false

// isFinite: MIGLIOR METODO per VERIFICARE SE un VALORE è un NUMERO
console.log(Number.isFinite(20)); // true
console.log(Number.isFinite('20')); // false
console.log(Number.isFinite(+'20X')); // false
console.log(Number.isNaN(23 / 0)); // false

// isInteger: per verificare se è un NUMERO INTERO
console.log(Number.isInteger(23)); // true
console.log(Number.isInteger(23.0)); // true
console.log(Number.isInteger(23 / 0)); // false
*/

/*
//////////////////////////////////
// LEZIONE 2: Math and Rounding (Sez. 12, Lez. 171)

// RADICE QUADRATA:
console.log(Math.sqrt(25)); // 5
// oppure
console.log(25 ** (1 / 2)); // 5

// RADICE CUBICA:
console.log(8 ** (1 / 3)); // 2

// VALORE MAX: restituisce il valore max dei numeri passati
console.log(Math.max(5, 18, 23, 11, 2)); // 23
console.log(Math.max(5, 18, '23', 11, 2)); // 23, perché esegue TYPE COERCION
console.log(Math.max(5, 18, '23px', 11, 2)); // NaN, perché NON esegue il PARSING

// VALORE MIN: restituisce il valore min dei numeri passati
console.log(Math.min(5, 18, 23, 11, 2)); // 2

// CALCOLO AREA di un CERCHIO con RAGGIO 10px (PI: costante pi-greco):
console.log(Math.PI * Number.parseFloat('10px') ** 2); // 314.1592653589793

// GENERARE NUMERO CASUALE:
console.log(Math.trunc(Math.random() * 6) + 1); // numero intero da 1 a 6

// ARROTONDAMENTO (ROUNDING) a NUMERO INTERO: Math.trunc
console.log(Math.trunc(23.3)); // 23
console.log(Math.trunc(23.9)); // 23
// ARROTONDAMENTO (ROUNDING) a NUMERO INTERO più VICINO: Math.round
console.log(Math.round(23.3)); // 23
console.log(Math.round(23.9)); // 24
// ARROTONDAMENTO (ROUNDING) a NUMERO INTERO per ECCESSO: Math.ceil
console.log(Math.ceil(23.3)); // 24
console.log(Math.ceil(23.9)); // 24
// ARROTONDAMENTO (ROUNDING) a NUMERO INTERO per DIFETTO: Math.floor
console.log(Math.floor(23.3)); // 23
console.log(Math.floor(23.9)); // 23

// *** Tutti questi metodi fanno anche la TYPE COERCION
console.log(Math.trunc('23.9')); // 23
console.log(Math.round('23.9')); // 24
console.log(Math.ceil('23.9')); // 24
console.log(Math.floor('23.9')); // 23

// *** N.B. Math.trunc e Math.floor eseguono sostanzialmente lo stesso calcolo se si tratta di NUMERI POSITIVI, ma NON quando si tratta di NUMERI NEGATIVI
console.log(Math.trunc(-23.3)); // -23
console.log(Math.floor(-23.3)); // -24 Math.floor funziona in modo migliore con i NUMERI NEGATIVI

// FUNZIONE per GENERARE NUMERO CASUALE:
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
console.log(randomInt(1, 6)); // numero intero da 1 a 6

// ARROTONDAMENTO (ROUNDING) NUMERI DECIMALI con numero che diventa STRINGA: toFixed()
console.log((2.7).toFixed(0)); // '3'
console.log((2.7).toFixed(3)); // '2,700'
console.log((2.345).toFixed(2)); // '2,35'
console.log(+(2.345).toFixed(2)); // 2,35 --> OPERATORE + per convertire STRINGA in NUMERO
*/

/*
//////////////////////////////////
// LEZIONE 3: The Remainder Operator (Sez. 12, Lez. 172)
// REMINDER OPERATOR: restituisce il resto di una divisione
console.log(5 % 2); // 1
console.log(5 / 2); // 2.5 --> 5 = 2 * 2 + 1
console.log(8 % 3); // 2
console.log(8 / 3); // 2.6666666666666665 --> 8 = 3 * 2 + 2

// REMINDER OPERATOR per verificare un NUMERO PARI (se è divisibile per 2 avrà resto 0):
console.log(6 % 2 === 0); // true

const isEven = n => n % 2 === 0;
console.log(isEven(6)); // true
console.log(isEven(23)); // false

// Coloriamo lo sfondo di tutti i movimenti pari e suddivisibili per 3 al click sul saldo corrente:
labelBalance.addEventListener('click', function () {
  // creo array dei movimenti con SPREAD OPERATOR e ciclo su di esso
  [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
    // movimenti pari
    if (i % 2 === 0) row.style.backgroundColor = 'lightblue';
    // movimenti divisibili per 3
    if (i % 3 === 0) row.style.backgroundColor = 'gold';
  });
});
*/

/*
//////////////////////////////////
// LEZIONE 4: Numeric Separators (Sez. 12, Lez. 173)
// Numeric separators: funzione disponibile dal 2021, sono caratteri di sottolineatura che permettono di comprendere un numero molto grande più facilmente

// Supponiamo di voler rappresentare un numero molto grande, il diametro del nostro sistema solare (287 miliardi e 460 milioni di km)
// Nel linguaggio inglese formale utilizziamo la virgola come separatore delle migliaia: 287,460,000,000
const diameter = 287_460_000_000;
console.log(diameter); // 287460000000

const price = 345_99;
console.log(price); // 34599

const transferFee1 = 15_00;
console.log(transferFee1); // 1500
const transferFee2 = 1_500;
console.log(transferFee2); // 1500

// *** il numero non cambia, però leggendo le variabili in JS abbiamo una lettura facilitata

// N.B. Numeric separators NON funzionano correttamente con le STRINGHE:
console.log(Number('230_000')); // NaN
console.log(parseInt('230_000')); // 230
*/

//////////////////////////////////
// LEZIONE 5: Working with BigInt (Sez. 12, Lez. 174)
// Introdotto in ES2020
// I numeri sono rappresentati internamente in 64 bit, ma solo 53 sono utilizzati per memorizzare le cifre stesse, le restanti vengono utilizzate per memorizzare la posizione della virgola e del segno
console.log(2 ** 53 - 1); // 9007199254740991 --> NUMERO PIù grande che JS può memorizzare in sicurezza
console.log(Number.MAX_SAFE_INTEGER); // // 9007199254740991 --> è anche salvato nel NAMESPACE dell'oggetto Number

// *** Facendo calcoli con numeri più GRANDI di questo perderemmo precisione di calcolo e non avremo risultati corretti
// BigInt ci aiuta a risolvere questo problema permettendoci di memorizzare numeri più grandi del MAX_SAFE_INTEGER
console.log(2395734084392570443574857487n); // la n trasforma il numero in un BigInt
console.log(BigInt(2395734084392570443574857487));

// Operazioni con BigInt:
console.log(10000n + 10000n); // 20000n
// console.log(Math.sqrt(16n)); // NON funziona! La radice quadrata è possibile solo con un numero

// *** N.B. NON è possibile mischiare numeri BigInt con numeri di altri tipi, per eseguire l'operazione BISOGNA CONVERTIRE tutti i dati in BigInt
// console.log(2473269572395743975349n + 23); // Uncaught TypeError: can't convert BigInt to number
console.log(2473269572395743975349n + BigInt(23)); // 2473269572395743975372n

// ECCEZIONI con OPERATORI LOGICI:
console.log(20n > 15); // true
console.log(20n === 20); // false
console.log(typeof 20n); // bigint
console.log(20n == 20); // true
console.log(20n == '20'); // true

// BigInt + STRINGA = STRINGA
console.log(2473269572395743975349n + ' is REALLY big!!!');

// DIVISIONI:
console.log(10n / 3n); // 3n, BigInt taglia la parte decimale e arrotonda all'intero più vicino
console.log(10 / 3); // 3.3333333333333335
