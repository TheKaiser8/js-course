/*
// LEZIONE 1: Values and Variables (Sez. 2, lez. 10)
let country = "Italia";
let continent = "Europa";
let population = 59.11;

console.log(country, continent, population);
*/

/*
///////////////////////////////////////////////
// LEZIONE 2: Data Types (Sez. 2, lez. 12)
let isIsland = false;
let language;

console.log(
  typeof isIsland,
  typeof population,
  typeof country,
  typeof language
);
*/

/*
///////////////////////////////////////////////
// LEZIONE 3: let, const and var (Sez. 2, lez. 13)
language = "italiano";
const country = "Italia";
const continent = "Europa";
const isIsland = false;
isIsland = true; // cambiare il valore ad una const genera l'errore "invalid assignment"
*/

///////////////////////////////////////////////
// LEZIONE 4: Basic Operators (Sez. 2, lez. 14)
// 1. If your country split in half, and each half would contain half the population, then how many people would live in each half?
// 2. Increase the population of your country by 1 and log the result to the console
// 3. Finland has a population of 6 million. Does your country have more people than Finland?
// 4. The average population of a country is 33 million people. Does your country have less people than the average country?
// 5. Based on the variables you created, create a new variable 'description' which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'

// 1.
let populationItaly = 59.11;
console.log(populationItaly / 2); // 29.555
// 2.
populationItaly++;
console.log(populationItaly); // 60.11

const populationFinland = 6;
console.log(populationItaly > populationFinland); // true

const populationAverage = 33;
console.log(populationItaly < populationAverage); // false

const country = "Italy";
const continent = "Europe";
const language = "italiano";
const description =
  country +
  " is in " +
  continent +
  ", and its " +
  populationItaly +
  " million people speak " +
  language;
console.log(description);
