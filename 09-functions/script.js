'use strict';

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
