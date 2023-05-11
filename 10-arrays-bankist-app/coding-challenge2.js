'use strict';

// Coding Challenge #2

// Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

// Your tasks:
// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:
// 1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
// humanAge = 16 + dogAge * 4
// 2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
// 3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
// 4. Run the function for both test datasets

// Test data:
// - Data 1: [5, 2, 4, 1, 15, 8, 3]
// - Data 2: [16, 6, 10, 5, 6, 1, 4]

const calcAverageHumanAge = function (ages) {
  // creo array con le età dei cani trasformata in età umana
  //   const humanAges = ages.map(function (dogAge) {
  //     if (dogAge <= 2) {
  //       return 2 * dogAge;
  //     } else {
  //       return 16 + dogAge * 4;
  //     }
  //   });
  // con operatore ternario:
  const humanAges = ages.map(dogAge =>
    dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4
  );

  console.log(humanAges); // Data test 1: [ 36, 4, 32, 2, 76, 48, 28 ], Data test 2: [ 80, 40, 56, 36, 40, 2, 32 ]

  // filtro array ottenendo solo i cani con età umana adulta (>= 18)
  const adultDogs = humanAges.filter(adult => adult >= 18);
  console.log(adultDogs); // Data test 1: [ 36, 32, 76, 48, 28 ], Data test 2: [ 80, 40, 56, 36, 40, 32 ]

  // ottengo l'etò media dei cani adulti
  const adultDogsAvg =
    adultDogs.reduce((acc, dog) => acc + dog, 0) / adultDogs.length;
  console.log(adultDogsAvg); // Data test 1: 44, Data test 2: 47.33
};
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

/*
// Jonas solution:
const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  const adults = humanAges.filter(age => age >= 18);
  console.log(humanAges);
  console.log(adults);

  // const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;

  // Altro metodo per CALCOLARE una MEDIA:
  // avendo i numeri: 2 e 3
  // Metodo comune: (2+3)/2 = 2.5
  // Metodo alternativo: 2/2+3/2 = 2.5 (divido immediatamente ogni valore per il totale dei numeri (che equivale a dire la lunghezza dell'array))
  const average = adults.reduce(
    (acc, age, i, arr) => acc + age / arr.length,
    0
  );

  return average;
};
const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);
*/
