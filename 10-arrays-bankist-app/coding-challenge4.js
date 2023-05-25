'use strict';

// Coding Challenge #4

// Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
// Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
// Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

// Your tasks:
// 1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do not create a new array, simply loop over the array. Formula:
// recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
// 2. Find Sarah's dog and log to the console whether it's eating too much or too little. Hint: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
// 3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
// 4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
// 5. Log to the console whether there is any dog eating exactly the amount of food that is recommended (just true or false)
// 6. Log to the console whether there is any dog eating an okay amount of food (just true or false)
// 7. Create an array containing the dogs that are eating an okay amount of food (try to reuse the condition used in 6.)
// 8. Create a shallow copy of the 'dogs' array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects 😉)

// Hints:
// - Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
// - Being within a range 10% above and below the recommended portion means:
// current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

// Test data:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1. Ciclo sull'ARRAY di OGGETTI (forEach method perché voglio modificare array esistente e NON crearne uno nuovo) e AGGIUNGO PROPRIETà ad ogni oggetto
dogs.forEach(
  dog => (dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28))
); // Math.trunc per eliminare la parte decimale
console.log(dogs);

// 2. FIND method per trovare l'oggetto e INCLUDES method per cercare il proprietario richiesto nell'array dei proprietari dell'oggetto trovato
const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(sarahDog);
console.log(
  `Sarah's dog is eating too ${
    sarahDog.curFood > sarahDog.recommendedFood ? 'much' : 'little'
  }`
);

// 3. FILTER method per filtrare e ottenere un NUOVO array di OGGETTI con i cani che mangiano troppo. FLATMAP method per ottenere un NUOVO array della STESSA LUNGHEZZA di quello già esistente e ottenere un ARRAY UNICO
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recommendedFood * 1.1)
  .flatMap(dog => dog.owners); // [ "Matilda", "Sarah", "John" ] (con map() otterrei un array di array)
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recommendedFood * 0.9)
  .flatMap(dog => dog.owners); // [ "Alice", "Bob" ]
console.log(ownersEatTooLittle);

// 4. JOIN method per creare stringhe con elementi di un array
const str = "'s dogs eat too";
console.log(`${ownersEatTooMuch.join(' and ')}${str} much!`);
console.log(`${ownersEatTooLittle.join(' and ')}${str} little!`);

// 5. SOME method per verificare se c'è qualche cane che mangia ESATTAMENTE la quantità di cibo raccomandata (ottenere VERO o FALSO)
console.log(dogs.some(dog => dog.curFood === dog.recommendedFood)); // false

// 6. SOME method per verificare se c'è qualche cane che mangia una quantità di cibo entro il range raccomandato (90-110% quantità raccomandata) (ottenere VERO o FALSO)
const foodRange = dog =>
  dog.curFood > dog.recommendedFood * 0.9 &&
  dog.curFood < dog.recommendedFood * 1.1; // salvo l'intera condizione della funzione di callback del metodo SOME in una variabile separata
console.log(dogs.some(foodRange)); // true

// 7. Riutilizzo la funzione creata precedentemente come funzione di callback di FILTER method
const dogsEatingOk = dogs.filter(foodRange);
console.log(dogsEatingOk); // [ { weight: 32, curFood: 340, owners: ['Michael'] } ]

// 8. Creo SHALLOW COPY dogs array con SLICE method e ORDINO elementi di un ARRAY di OGGETTI con SORT method
// SORT method con OGGETTI {1, 2, 3}
const dogsSorted = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(dogsSorted);

// In questo modo andrei a modificare l'array originale:
// const dogsSorted = dogs;
// dogsSorted.sort((a, b) => a.recommendedFood - b.recommendedFood);
// console.log(dogsSorted);
console.log(dogs);
