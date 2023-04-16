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

/*
///////////////////////////////////////////////
// LEZIONE 6: Strings and Template Literals (Sez. 2, lez. 17)
// 1. Recreate the 'description' variable from the last assignment, this time using the template literal syntax

const populationItaly = 59.11;
const country = "Italy";
const continent = "Europe";
const language = "italiano";
const description = `${country} is in ${continent}, and its ${populationItaly} million people speak ${language}`;
console.log(description);
*/

/*
///////////////////////////////////////////////
// LEZIONE 7: Taking Decisions: if / else Statements (Sez. 2, lez. 18)
// 1. If your country's population is greater that 33 million, log a string like this to the console: 'Portugal's population is above average'. Otherwise, log a string like 'Portugal's population is 22 million below average' (the 22 is the average of 33 minus the country's population)
// 2. After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original

const populationItaly = 59.11;
const country = "Italy";

if (populationItaly > 33) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(
    `${country}'s population is ${33 - populationItaly} million below average`
  );
}
*/

/*
///////////////////////////////////////////////
// LEZIONE 8: Type Conversion and Coercion (Sez. 2, lez. 20)
// 1. Predict the result of these 5 operations without executing them:
"9" - "5"; // 4
"19" - "13" + "17"; // "617"
"19" - "13" + 17; // 23
"123" < 57; // false
5 + 6 + "4" + 9 - 4 - 2; // 1143
// 2. Execute the operations to check if you were right
*/

/*
///////////////////////////////////////////////
// LEZIONE 10: Equality Operators: == vs. === (Sez. 2, lez. 22)
// 1. Declare a variable 'numNeighbours' based on a prompt input like this: prompt('How many neighbour countries does your country have?');
// 2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality == for now)
// 3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours' is greater than 1
// 4. Use an else block to log 'No borders' (this block will be executed when 'numNeighbours' is 0 or any other value)
// 5. Test the code with different values of 'numNeighbours', including 1 and 0.
// 6. Change == to ===, and test the code again, with the same values of 'numNeighbours'. Notice what happens when there is exactly 1 border! Why is this happening?
// 7. Finally, convert 'numNeighbours' to a number, and watch what happens now when you input 1
// 8. Reflect on why we should use the === operator and type conversion in this situation

const numNeighbours = Number(
  prompt("How many neighbour countries does your country have?")
);

if (numNeighbours === 1) {
  console.log("Only 1 border!");
} else if (numNeighbours > 1) {
  console.log("More than 1 border!");
} else {
  console.log("No borders!");
}
*/

/*
///////////////////////////////////////////////
// LEZIONE 12: Logical Operators (Sez. 2, lez. 24)
// 1. Comment out the previous code so the prompt doesn't get in the way
// 2. Let's say Sarah is looking for a new country to live in. She wants to live in a country that speaks english, has less than 50 million people and is not an island.
// 3. Write an if statement to help Sarah figure out if your country is right for her. You will need to write a condition that accounts for all of Sarah's criteria. Take your time with this, and check part of the solution if necessary.
// 4. If yours is the right country, log a string like this: 'You should live in Portugal :)'. If not, log 'Portugal does not meet your criteria :('
// 5. Probably your country does not meet all the criteria. So go back and temporarily change some variables in order to make the condition true (unless you live in Canada :D)

const country = "Italia";
let population = 49.11;
let language = "english";
const isIsland = false;

if (population < 50 && language === "english" && !isIsland) {
  console.log(`Dovresti vivere in ${country}`);
} else {
  console.log(`L'${country} non soddisfa i tuoi criteri`);
}
*/

///////////////////////////////////////////////
// LEZIONE 13: The switch Statement (Sez. 2, lez. 26)
const language = "italian";

switch (language) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3nd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
}
