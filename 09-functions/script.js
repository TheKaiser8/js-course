'use strict';

/*
//////////////////////////////////
// LEZIONE 1: Default Parameters (Sez. 10, Lez. 128)

// Creo array in cui mettere le prenotazioni
const bookings = [];

// Con ES6 possiamo impostare i parametri di DEFAULT direttamente negli argomenti della funzione
// I parametri di default possono anche essere espressione come price = 199 * 1.5 o utilizzando il valore degli altri parametri (DEFINITI PRIMA) price = 199 * numPassengers
const createdBooking = function (flightNum, numPassengers = 1, price = 199) {
  // Prima di ES6 impostavamo così i parametri di DEFAULT:
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

  const booking = {
    // creiamo le proprietà oggetto con la sintassi più recente (viene creata una proprietà oggetto corrispondente a quella degli argomenti di funzione):
    flightNum, // equivale a flightNum: flightNum
    numPassengers, // equivale a numPassengers: numPassengers
    price, // equivale a price: price
  };
  console.log(booking);

  bookings.push(booking);
};
createdBooking('LH123'); // Object { flightNum: "LH123", numPassengers: undefined, price: undefined } --> SENZA PARAMETRI di DEFAULT
createdBooking('LH123'); // Object { flightNum: "LH123", numPassengers: 1, price: 199 } --> CON PARAMETRI di DEFAULT
createdBooking('LH123', 2, 800);
// Per saltare un parametro e lasciare che venga assegnato un parametro di DEFAULT, dobbiamo assegnare a quel parametro il valore undefined
createdBooking('LH123', undefined, 1000);
*/

/*
//////////////////////////////////
// LEZIONE 2: How Passing Arguments Works: Value vs. Reference (Sez. 10, Lez. 129)
const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 2543686538568,
};

const checkIn = function (flightNum, passenger) {
  // simuliamo il cambio del volo (NON è una good practice cambiare i parametri, solamente a scopo didattico)
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 2543686538568) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};
checkIn(flight, jonas);
console.log(flight);
console.log(jonas);
// flight è un PRIMITIVE TYPE, nella funzione checkIn abbiamo passato solamente un copia del valore originale di flight (come se fosse: flightNum = flight), per l'oggetto jonas invece manipolare l'oggetto passenger o jonas è la stessa cosa perché fanno riferimento allo stesso oggetto heap in memoria

// N.B. Passare un PRIMITIVE TYPE in un argomento di funzione e come passare una sua copia, quindi non verrà cambiato il valore originale perché verranno create 2 variabile differenti in memoria

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};
newPassport(jonas);
checkIn(flight, jonas);
// Modificando l'oggetto jonas in 2 funzioni, avremo una funzione che conferma il numero di passaporto corretto e successivamente quella che confronta il numero di passaporto cambiato per cui otterremo un problema
// *** Manipolare lo stesso oggetto in funzioni diverse può creare problemi, ATTENZIONE!!!

// JS NON ha il passaggio per RIFERIMENTO, ma SOLO per VALORE, a differenza di altri linguaggi come C++ dove puoi passare un riferimento a qualsiasi valore. Con JS negli oggetti passiamo un riferimento, ma quel riferimento è semplicemente un valore che contiene un indirizzo di memoria
*/

//////////////////////////////////
// LEZIONE 3: First-Class and Higher-Order Functions (Sez. 10, Lez. 130)
// vedi slide

/*
//////////////////////////////////
// LEZIONE 4: Functions Accepting Callback Functions (Sez. 10, Lez. 131)
// Funzione che elimina gli spazi vuoti:
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
  // return str.replaceAll(' ', '').toLowerCase(); // con replaceAll()
};
console.log(oneWord('CIAO a TutTI'));

// Funzione che trasforma in maiuscolo la PRIMA PAROLA della stringa passata:
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};
console.log(upperFirstWord('ciao a tutti'));

// Funzione HIGHER-ORDER (di ordine superiore) che accetta una funzione (chiamata anche CALLBACK function) come argomento:
const trasformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`); // posso ottenere il nome della funzione come se fosse una proprietà
};
trasformer('Prova funzione di ordine superiore', upperFirstWord); // passiamo solo il valore della funzione upperFirstWord, non la funzione stessa upperFirstWord()
trasformer('Prova funzione di ordine superiore', oneWord);

const high5 = function () {
  console.log('👋');
};
document.body.addEventListener('click', high5); // funzione evento DOM che genera in console l'emoji richiamata attraverso la funzione di callback high5

['Jonas', 'Martha', 'Adam'].forEach(high5); // per ogni elemento dell'array viene richiamata la funzione di callback high5

// *** N.B. L'utilizzo di FUNZIONI di CALLBACK rende più semplice scrivere il codice in parti riutilizzabili e interconnesse, ma soprattutto permette la creazione di ASTRAZIONI ad un livello più elevato. La funzione HIGHER-ORDER, nel nostro caso, non si preoccupa di come avviene la trasformazione della stringa (richiama semplicemente la funzione che avviene ad un livello di astrazione inferiore)
*/

/*
//////////////////////////////////
// LEZIONE 5: Functions Returning Functions (Sez. 10, Lez. 132)
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

// Chiamata della funzione sulla stessa riga di codice(la funzione greet() ha come argomento name nella funzione di ritorno):
greet('Hello')('Jonas');

// Con ARROW FUNCTION:
const greetArrowFunction = greeting => name =>
  console.log(`${greeting} ${name}`);

greetArrowFunction('Ciao')('Jonas');
*/

/*
//////////////////////////////////
// LEZIONE 6: The call and apply Methods (Sez. 10, Lez. 133)
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function() {} // vecchia sintassi
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  }, // sintassi migliorata
};
lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

// Simuliamo che il gruppo Lufthansa abbia creato una nuova compagnia (i nomi delle proprietà oggetto devono essere gli stessi):
const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// book(23, 'Sarah Williams'); // this punterà ad undefined per cui non funzionerà

// *** Ci sono 2 metodi per dire a JS come dev'essere la keyvword THIS: 3 function methods
// 1) CALL
// 2) APPLY
// 3) BIND (ASSOCIAZIONE)

// 1) CALL METHOD
book.call(eurowings, 23, 'Sarah Williams'); // il PRIMO ARGOMENTO è quello che specifica dove deve puntare la parola chiave THIS
book.call(lufthansa, 239, 'Mary Cooper');

// 2) APPLY METHOD: come CALL METHOD, ma invece degli argomenti accetta un ARRAY di argomenti
book.apply(lufthansa, [453, 'David Jones']); // array NON salvato in variabile

const flightData = [249, 'Walter Francis'];
book.apply(lufthansa, flightData); // CON array SALVATO in variabile

// *** APPLY METHOD non è più utilizzato in JS moderno, si utilizza CALL METHOD passando un'array di argomenti espansi con l'utilizzo dello spread operator
book.call(eurowings, ...flightData);

//////////////////////////////////
// LEZIONE 7: The bind Method (Sez. 10, Lez. 134)
// BIND method non chiama immediatamente la funzione, ma restituisce una nuova funzione in cui è associata la keyword THIS
const bookEW = book.bind(eurowings); // restituendo una funzione possiamo creare una variabile per tutte le volte che richiamiamo l'oggetto eurowings, in modo tale che THIS punterà sempre su questo oggetto
bookEW(931, 'Steven Williams');
console.log(eurowings);

const bookLH = book.bind(lufthansa);
bookLH(31, 'Mark Prost');
console.log(lufthansa);

// possiamo creare una variabile specifica per lo stesso numero di volo:
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Michael Gross'); // l'unico parametro da inserire diventa il nome

// Con Event Listener:
lufthansa.planes = 300; // aggiungiamo proprietà numero aerei compagnia
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
}; // metodo che aggiunge aerei
// lufthansa.buyPlane();

// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane); // in questo modo la parola chiave this punterà sull'evento, per cui sul pulsante 'buy' e non sull'oggetto lufthansa

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa)); // in questo modo la funzione di callback punta all'oggetto lufthansa

// Applicazione parziale (partial application): possiamo pre-impostare dei parametri
// FUNZIONE GENERALE
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

// FUNZIONE SPECIFICA:
const addVAT = addTax.bind(null, 0.23); // in questo caso non deve puntare a nulla la keyword this e la pre-impostiamo come NULL
// sarebbe come: addVAT = value + value * 0.23;
console.log(addVAT(100));

// Challenge (senza metodo bind):
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const taxRate25 = addTaxRate(0.23);
console.log(taxRate25(100));
*/

/*
//////////////////////////////////
// LEZIONE 8: Immediately Invoked Function Expressions (IIFE) (Sez. 10, Lez. 136)
// Funzioni di cui abbiamo bisogno che vengano eseguite una sola volta e poi mai più

// Scritta in questo modo potremmo utilizzare la funzione quante volte vogliamo:
const runOnce = function () {
  console.log('This will never run again');
};
runOnce(); // viene invocata quando ne abbiamo bisogno e quando vogliamo noi

// IIFE: per renderla eseguibile immediatamente e una sola volta NON dobbiamo salvarla in variabile, ma RACCHIUDERLA tra PARENTESI e INVOCARLA IMMEDIATAMENTE:
(function () {
  console.log('This will never run again');
})(); // racchiudendo tutto tra parentesi abbiamo trasformato la funzione in espressione e la possiamo invocare immediatamente facendo seguito con le parentesi () --> diventa un'espressione di funzione: (function () { console.log('This will never run again'); }) è il valore di funzione che viene invocato con le 2 parentesi subito dopo

// stessa cosa per un ARROW FUNCTION:
(() => console.log('This will ALSO never run again'))();

// IIFE --> racchiudo tra parentesi e invoco immediatamente: (.....espressione di funzione.....)()
*/

/*
//////////////////////////////////
// LEZIONE 9: Closures (Sez. 10, Lez. 137)
// Closure: NON è una feature che usiamo esplicitamente, NON le creiamo manualmente ma vengono create AUTOMATICAMENTE in determinate situazioni che dobbiamo conoscere e sapere riconoscere
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

// Chiamiamo la funzione e la salviamo in variabile:
const booker = secureBooking(); // a questo punto secureBooking esce dallo stack di esecuzione ma booker ha comunque accesso alle sue variabili. La funzione booker nasce all'interno della funzione secureBooking

booker(); // 1 passengers
booker(); // 2 passengers
booker(); // 3 passengers

// *** N.B. Una CLOSURE fa sì che una funzione ricordi essenzialmente tutte le variabili che esistevano nel luogo di nascita della funzione. Qualsiasi funzione ha sempre accesso al VARIABLE ENVIRONMENT dell'EXECUTION CONTEXT nel quale è stata creata, quindi CLOSURE rappresenta una sorta di connesione tra VARIABLE ENVIRONMENT e la funzione

// *** CLOSURE ha PRIORITà sullo SCOPE CHAIN anche se la variabile che cerca si trova nell'ambito globale, prima verrà cercata in CLOSURE

// NON abbiamo modo di accedere alle CLOSURE perché NON sono TANGIBILI, però possiamo vedere qualche dettaglio di questa proprietà interna della funzioni:
console.dir(booker); // [[Scopes]] --> visualizzabile solo in EDGE e CHROME, le doppie parentesi indicano che sono proprietà interne alla funzione stessa
*/

//////////////////////////////////
// LEZIONE 10: More Closure Examples (Sez. 10, Lez. 138)

// ESEMPIO 1 (SENZA RETURN nelle funzioni):
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g(); // a questo punto l'ambiente di variabile g non c'è più, ma chiamando f() abbiamo comunque accesso alle sue variabili
f(); // 23 * 2 = 46

// Riassegnazione di f con funzione h(): la closure viene cambiata quando viene riassegnata la variabile
h();
f(); // 777 * 2 = 1554

// ESEMPIO 2 (timer):
const boardPassengers = function (n, wait) {
  const perGroup = n / 3; // divido numero passegeri per 3

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000); // la funzione setTimeout richiede 2 parametri (funzione che verrà eseguita, dopo quanto tempo verrà eseguita in millisecondi)

  console.log(`Will start boarding in ${wait} seconds`);
};

// aggiungo variabile per verificare che CLOSURE abbia la priorità sullo SCOPE CHAIN:
const perGroup = 1000; // NON viene utilizzato questo valore nel setTimeout perché ha priorità minore della CLOSURE
boardPassengers(150, 3);
