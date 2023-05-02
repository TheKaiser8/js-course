// Coding Challenge #4

// Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
// The input will come from a textarea inserted into the DOM (see code below to insert the elements), and conversion will happen when the button is pressed.

// Test data (pasted to textarea, including spaces):
// underscore_case
//  first_name
// Some_Variable
//   calculate_AGE
// delayed_departure

// Should produce this output (5 separate console.log outputs):
// underscoreCase      ✅
// firstName           ✅✅
// someVariable        ✅✅✅
// calculateAge        ✅✅✅✅
// delayedDeparture    ✅✅✅✅✅

// Hints:
// - Remember which character defines a new line in the textarea 😉
// - The solution only needs to work for a variable made out of 2 words, like a_b
// - Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
// - This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

// Afterwards, test with your own test data!

/*
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
const converterBtn = document.querySelector('button');
converterBtn.textContent = 'Converti';
converterBtn.style.width = 'fit-content';

converterBtn.addEventListener('click', function () {
  // console.log(document.querySelector('textarea').value);
  const inputValue = document.querySelector('textarea').value;
  // stringConvert(inputValue);
  stringConvertAll(inputValue);
});

const arr = [];

// Soluzione che permette la conversione corretta di una sola variabile per volta:
// const stringConvert = function (str) {
//   const strLower = str.toLowerCase();
//   const word1 = strLower.slice(0, strLower.indexOf('_'));
//   const word2Lower = strLower.slice(strLower.indexOf('_') + 1);
//   const word2 = word2Lower[0].toUpperCase() + word2Lower.slice(1);

//   const wordCamelCase = word1 + word2;
//   arr.push(wordCamelCase);
//   console.log(`${wordCamelCase} ${'✅'.repeat(arr.length)}`);
// };
// stringConvert('underscore_case');
// stringConvert('first_name');
// stringConvert('Some_Variable');
// stringConvert('calculate_AGE');
// stringConvert('delayed_departure');

// Soluzione che permette la conversione di più variabili inserite nella textarea separate da un carattere di invio a capo (\n)
const stringConvertAll = function (str) {
  const strLowerArr = str.toLowerCase().split('\n');
  console.log(strLowerArr);

  for (const el of strLowerArr) {
    const word1 = el.slice(0, el.indexOf('_'));
    const word2Lower = el.slice(el.indexOf('_') + 1);
    const word2 = word2Lower[0].toUpperCase() + word2Lower.slice(1);

    const wordCamelCase = (word1 + word2).trim().padEnd(20);
    arr.push(wordCamelCase);
    console.log(`${wordCamelCase}${'✅'.repeat(arr.length)}`);
  }
};

// Soluzione Jonas:
document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});
*/
