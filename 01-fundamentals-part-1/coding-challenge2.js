// Use the BMI example from Challenge #1, and the code you already wrote, and improve it.

// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

// Hint: Use an if/else statement 😉

let markWeight = 78;
let markHeight = 1.69;
console.log("peso e altezza Mark", markWeight, markHeight);

let johnWeight = 92;
let johnHeight = 1.95;
console.log("peso e altezza John", johnWeight, johnHeight);

let markBMI = markWeight / markHeight ** 2;
let johnBMI = johnWeight / johnHeight ** 2;
console.log("Mark BMI", markBMI, "John BMI", johnBMI);

if (markBMI > johnBMI) {
  console.log(`Mark's BMI ${markBMI} is higher than John ${johnBMI}!`);
} else if (markBMI == johnBMI) {
  console.log(`Mark ${markBMI} and John ${johnBMI} have the same BMI!`);
} else {
  console.log(`John's BMI ${johnBMI} is higher than Mark's ${markBMI}!`);
}

// con misure diverse:
markWeight = 95;
markHeight = 1.88;
console.log("peso e altezza Mark", markWeight, markHeight);

johnWeight = 85;
johnHeight = 1.76;
console.log("peso e altezza John", johnWeight, johnHeight);

markBMI = markWeight / markHeight ** 2;
johnBMI = johnWeight / johnHeight ** 2;
console.log("Mark BMI", markBMI, "John BMI", johnBMI);

if (markBMI > johnBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John (${johnBMI})!`);
} else if (markBMI == johnBMI) {
  // condizione non richiesta dal compito
  console.log(`Mark (${markBMI}) and John (${johnBMI}) have the same BMI!`);
} else {
  console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
}
