// Coding Challenge #1

// Given an array of forecasted maximum temperatures, the thermometer displays a string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

// Your tasks:
// 1. Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console. Try it with both test datasets.
// 2. Use the problem-solving framework: Understand the problem and break it up into sub-problems!

// Test data:
// - Data 1: [17, 21, 23]
// - Data 2: [12, 5, -5, 0, 4]

// 1) Understanding the problem
// - Array transformed to string, separated by three dots (...)
// - What is the X days? Answer: index + 1

// 2) Breaking up into sub-problems
// - Transform array into string
// - Transform each element to string with °C
// - Strings needs to contain day (index + 1)
// - Add ... between elements and start and end of string
// - Log string to console

// SOLUZIONE 1
const printForecast = function (arr) {
  let string = '... ';

  for (let i = 0; i < arr.length; i++) {
    const temp = arr[i];
    const tempString = `${temp}°C in ${i + 1} days ... `;
    console.log(tempString);
    string += tempString;
  }
  return string;
};
console.log(printForecast([17, 21, 23]));

// SOLUZIONE 2
// const data1 = [17, 21, 23];
// const data2 = [12, 5, -5, 0, 4];

// // console.log(`... ${data1[0]}ºC ... ${data1[1]}ºC ... ${data1[2]}ºC ...`);

// const printForecast = function (arr) {
//   let str = '';
//   for (let i = 0; i < arr.length; i++) {
//     str += `${arr[i]}ºC in ${i + 1} days ... `;
//   }
//   console.log('...' + str);
// };
// printForecast(data1);
