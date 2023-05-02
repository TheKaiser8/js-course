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
