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

/*
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
*/

/*
//////////////////////////////////
// LEZIONE 4: Arrow Functions (Sez. 3, lez. 35)
// 1. Recreate the last assignment, but this time create an arrow function called 'percentageOfWorld3'

// ARROW FUNCTIONS:
const percentageOfWorld3 = (population) =>
  ((population / 7900) * 100).toFixed(2);

const percRussia = percentageOfWorld3(143.4);
const percGermany = percentageOfWorld3(83.2);
const percFinland = percentageOfWorld3(6);

console.log(
  `% con ARROW FUNCTION: Russia: ${percRussia}, Germania: ${percGermany}, Finlandia: ${percFinland}`
);
*/

/*
//////////////////////////////////
// LEZIONE 5: Functions Calling Other Functions (Sez. 3, lez. 36)
// 1. Create a function called 'describePopulation'. Use the function type you like the most. This function takes in two arguments: 'country' and 'population', and returns a string like this: 'China has 1441 million people, which is about 18.2% of the world.'
// 2. To calculate the percentage, 'describePopulation' call the 'percentageOfWorld1' you created earlier
// 3. Call 'describePopulation' with data for 3 countries of your choice

const percentageOfWorld1 = (population) =>
  ((population / 7900) * 100).toFixed(2);

const describePopulation = (country, population) => {
  const percPopulation = percentageOfWorld1(population);

  return `${country} has ${population} million people, which is about ${percPopulation}% of the world.`;
};

const descItaly = describePopulation("Italy", 59);
console.log(descItaly);
const descChina = describePopulation("China", 1441);
console.log(descChina);
const descUSA = describePopulation("USA", 331.9);
console.log(descUSA);
*/

/*
//////////////////////////////////
// LEZIONE 7: Introduction to Arrays (Sez. 3, lez. 39)
// 1. Create an array containing 4 population values of 4 countries of your choice. You may use the values you have been using previously. Store this array into a variable called 'populations'
// 2. Log to the console whether the array has 4 elements or not (true or false)
// 3. Create an array called 'percentages' containing the percentages of the world population for these 4 population values. Use the function 'percentageOfWorld1' that you created earlier to compute the 4 percentage values

const populations = [59, 1441, 331.9, 143.4];
console.log(populations.length === 4); // ottengo un valore booleano (true se === 4, false in caso contrario)

const percentageOfWorld1 = (population) =>
  ((population / 7900) * 100).toFixed(2);
const percItaly = percentageOfWorld1(populations[0]);
const percChina = percentageOfWorld1(populations[1]);
const percUSA = percentageOfWorld1(populations[2]);
const percRussia = percentageOfWorld1(populations[populations.length - 1]);

const percentages = [percItaly, percChina, percUSA, percRussia];
console.log(percentages);
*/

/*
//////////////////////////////////
// LEZIONE 8: Basic Array Operations (Methods) (Sez. 3, lez. 40)
// 1. Create an array containing all the neighbouring countries of a country of your choice. Choose a country which has at least 2 or 3 neighbours. Store the array into a variable called 'neighbours'
// 2. At some point, a new country called 'Utopia' is created in the neighbourhood of your selected country. So add it to the end of the 'neighbours' array
// 3. Unfortunately, after some time, the new country is dissolved. So remove it from the end of the array
// 4. If the 'neighbours' array does not include the country ‘Germany’, log to the console: 'Probably not a central European country :D'
// 5. Change the name of one of your neighbouring countries. To do that, find the index of the country in the 'neighbours' array, and then use that index to change the array at that index position. For example, you can search for 'Sweden' in the array, and then replace it with 'Republic of Sweden'.

const neighbours = ["Switzerland", "France", "Austria", "Slovenia"];

neighbours.push("Utopia"); // add element
console.log(neighbours);

neighbours.pop(); // remove last element
console.log(neighbours);

if (!neighbours.includes("Germany")) {
  console.log("Probably not a central European country :D");
}

// console.log(neighbours.indexOf('Slovenia')); // find index element
// neighbours[3] = 'Republic of Slovenia'; // change name element

neighbours[neighbours.indexOf("Slovenia")] = "Republic of Slovenia"; // in una riga sola
console.log(neighbours);
*/

/*
//////////////////////////////////
// LEZIONE 9: Introduction to Objects (Sez. 3, lez. 42)
// 1. Create an object called 'myCountry' for a country of your choice, containing properties 'country', 'capital', 'language', 'population' and 'neighbours' (an array like we used in previous assignments)

const myCountry = {
  country: "Italy",
  capital: "Rome",
  language: "italian",
  population: 59.3,
  neighbours: ["Switzerland", "France", "Austria", "Slovenia"],
};

console.log(myCountry);
*/

/*
//////////////////////////////////
// LEZIONE 10: Dot vs. Bracket Notation (Sez. 3, lez. 43)
// 1. Using the object from the previous assignment, log a string like this to the console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki.'
// 2. Increase the country's population by two million using dot notation, and then decrease it by two million using brackets notation.

const myCountry = {
  country: "Italy",
  capital: "Rome",
  language: "italian",
  population: 59.3,
  neighbours: ["Switzerland", "France", "Austria", "Slovenia"],
};

console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
);

// SOLUZIONE 1: aumento o decremento in base al valore originale
// console.log(myCountry.population + 2);
// console.log(myCountry['population'] - 2);

// SOLUZIONE 2: aumento o decremento in base all'ultimo valore di population
myCountry.population += 2;
console.log(myCountry.population);

myCountry["population"] -= 2;
console.log(myCountry.population);
*/

/*
//////////////////////////////////
// LEZIONE 11: Object Methods (Sez. 3, lez. 44)
// 1. Add a method called 'describe' to the 'myCountry' object. This method will log a string to the console, similar to the string logged in the previous assignment, but this time using the 'this' keyword.
// 2. Call the 'describe' method
// 3. Add a method called 'checkIsland' to the 'myCountry' object. This method will set a new property on the object, called 'isIsland'. 'isIsland' will be true if there are no neighbouring countries, and false if there are. Use the ternary operator to set the property.

// SOLUZIONE 1:
// const myCountry = {
//     country: 'Italy',
//     capital: 'Rome',
//     language: 'italian',
//     population: 59.3,
//     neighbours: [
//         'Switzerland',
//         'France',
//         'Austria',
//         'Slovenia'
//     ],

//     describe: function() {
//         return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.checkIsland() ? 'no' : this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`;
//     },

//     checkIsland: function() {
//         this.isIsland = false;
//         return this.isIsland;
//     }
// };

// console.log(myCountry.describe());

// SOLUZIONE 2:
const myCountry = {
  country: "Italy",
  capital: "Rome",
  language: "italian",
  population: 59.3,
  neighbours: [
    // 'Switzerland',
    // 'France',
    // 'Austria',
    // 'Slovenia'
  ],

  describe: function () {
    console.log(
      `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
    ); // non creo un ternario nella stringa di descrizione, ma restituisco solo il numero di paesi confinanti che è uguale a 0 se è un'isola
  },

  checkIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;

    // Even simpler version (see why this works...)
    // this.isIsland = !Boolean(this.neighbours.length);
  },
};
myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);
*/
