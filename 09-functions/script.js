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
