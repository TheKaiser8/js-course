'use strict';

// Coding Challenge #3

// Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time as an arrow function, and using chaining!

// Test data:
// - Data 1: [5, 2, 4, 1, 15, 8, 3]
// - Data 2: [16, 6, 10, 5, 6, 1, 4]

/*
const calcAverageHumanAge = ages =>
  ages
    .map(humanAge => (humanAge <= 2 ? 2 * humanAge : 16 + humanAge * 4))
    .filter(adult => adult >= 18)
    .reduce((acc, avg, i, arr) => {
      console.log(arr); // debug di controllo dell'array filtrato
      return acc + avg / arr.length;
    }, 0); // con la concatenazione dei metodi questo è l'unico modo per calcolare la media poiché non abbiamo salvato in una variabile l'array filtrato con i soli cani adulti, quindi possiamo ottenere la lunghezza dell'array solamente utilizzando l'argomento del metodo reduce

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2); // Data test 1: 44, Data test 2: 47.33
*/
