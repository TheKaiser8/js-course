"use strict";

/*
//////////////////////////////////
// LEZIONE 2: Functions (Sez. 3, lez. 33)
// 1. Write a function called 'describeCountry' which takes three parameters: 'country', 'population' and 'capitalCity'. Based on this input, the function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'
// 2. Call this function 3 times, with input data for 3 different countries. Store the returned values in 3 different variables, and log them to the console

function describeCountry(country, population, capitalCity) {
  // const yourCountry = `${country} has ${population} million people and its capital city is ${capitalCity}`;
  // return yourCountry; // forma estesa salvando la stringa in una variabile
  return `${country} has ${population} million people and its capital city is ${capitalCity}.`; // forma contratta
}

const italy = describeCountry("Italy", 59, "Rome");
console.log(italy);

const germany = describeCountry("Germany", 83, "Berlin");
console.log(germany);

const finland = describeCountry("Finland", 6, "Helsinki");
console.log(finland);
// non fatto un console.log unico per non avere una stringa unica
*/

//////////////////////////////////
// LEZIONE 3: Function Declarations vs. Expressions (Sez. 3, lez. 34)
// 1. The world population is 7900 million people. Create a function declaration called 'percentageOfWorld1' which receives a 'population' value, and returns the percentage of the world population that the given population represents. For example, China has 1441 million people, so it's about 18.2% of the world population
// 2. To calculate the percentage, divide the given 'population' value by 7900 and then multiply by 100
// 3. Call 'percentageOfWorld1' for 3 populations of countries of your choice, store the results into variables, and log them to the console
// 4. Create a function expression which does the exact same thing, called 'percentageOfWorld2', and also call it with 3 country populations (can be the same populations)

// FUNCTION DECLARATION:
function percentageOfWorld1(population) {
  return ((population / 7900) * 100).toFixed(2); // calcolo % rispetto alla popolazione mondiale (7900 milioni di persone)
}

const percItaly = percentageOfWorld1(59);
const percChina = percentageOfWorld1(1441);
const percUnitedStates = percentageOfWorld1(331.9);

console.log(
  `% con Function DECLARATION: Italia: ${percItaly}, Cina: ${percChina}, Stati Uniti: ${percUnitedStates}`
);

// FUNCTION EXPRESSION:
const percentageOfWorld2 = function (population) {
  return ((population / 7900) * 100).toFixed(2);
};

const percRussia = percentageOfWorld2(143.4);
const percGermany = percentageOfWorld2(83.2);
const percFinland = percentageOfWorld2(6);

console.log(
  `% con Function EXPRESSION: Russia: ${percRussia}, Germania: ${percGermany}, Finlandia: ${percFinland}`
);
