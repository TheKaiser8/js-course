/*
// LEZIONE 1: Values and Variables (Sez. 2, lez. 10)
1. Declare variables called 'country', 'continent' and 'population' and assign their values according to your own country (population in millions)
2. Log their values to the console

let country = "Italia";
let continent = "Europa";
let population = 59.11;

console.log(country, continent, population);
*/

/*
///////////////////////////////////////////////
// LEZIONE 2: Data Types (Sez. 2, lez. 12)
1. Declare a variable called 'isIsland' and set its value according to your country. The variable should hold a Boolean value. Also declare a variable 'language', but don't assign it any value yet
2. Log the types of 'isIsland', 'population', 'country' and 'language' to the console

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
1. Set the value of 'language' to the language spoken where you live (some countries have multiple languages, but just choose one)
2. Think about which variables should be const variables (which values will never change, and which might change?). Then, change these variables to const.
3. Try to change one of the changed variables now, and observe what happens

language = "italiano";
const country = "Italia";
const continent = "Europa";
const isIsland = false;
isIsland = true; // cambiare il valore ad una const genera l'errore "invalid assignment"
*/

/*
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
*/

///////////////////////////////////////////////
// LEZIONE 6: Strings and Template Literals (Sez. 2, lez. 17)
// 1. Recreate the 'description' variable from the last assignment, this time using the template literal syntax

const populationItaly = 59.11;
const country = "Italy";
const continent = "Europe";
const language = "italiano";
const description = `${country} is in ${continent}, and its ${populationItaly} million people speak ${language}`;
console.log(description);
