// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
///////////////////////////////////////
// LEZIONE 1: Using Google, StackOverflow and MDN (Sez. 5, lez. 59)
//

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what to do? I probably need to ignore the error

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
  //   const min = Math.min(...temps); // metodo (...arr) ancora da studiare
  //   const max = Math.max(...temps);

  let max = temps[0]; // assumiamo che il primo elemento sia il valore max
  let min = temps[0]; // assumiamo che il primo elemento sia il valore min

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i]; // creo variabile perché utilizzo più volte quel dato

    if (typeof curTemp !== 'number') continue; // se non sono numeri il ciclo continua, terminando l'iterazione corrente e passa alla successiva senza eseguire la logica sottostante

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  console.log(`Max temp: ${max}, min temp: ${min}`);
  return max - min;
};
console.log(
  'Example temperature amplitude:',
  calcTempAmplitude([10, -5, 3, 15])
);
const tempAmplitude = calcTempAmplitude(temperatures);
console.log('Temperature array amplitude:', tempAmplitude);

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays

const temperatures2 = [10, -5, 3, 15, 22];

// con METODI fin qui appresi:
const arrayMergedExample = [];

for (let i = 0; i < temperatures.length; i++) {
  arrayMergedExample.push(temperatures[i]);
}

for (let i = 0; i < temperatures2.length; i++) {
  arrayMergedExample.push(temperatures[i]);
}

console.log(arrayMergedExample);

// con metodo concat():
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// Expected output: Array ["a", "b", "c", "d", "e", "f"]

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);

  let max = temps[0]; // assumiamo che il primo elemento sia il valore max
  let min = temps[0]; // assumiamo che il primo elemento sia il valore min

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i]; // creo variabile perché utilizzo più volte quel dato

    if (typeof curTemp !== 'number') continue; // se non sono numeri il ciclo continua, terminando l'iterazione corrente e passa alla successiva senza eseguire la logica sottostante

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  console.log(`Max temp: ${max}, min temp: ${min}`);
  return max - min;
};

const tempAmplitudeNew = calcTempAmplitudeNew(temperatures, temperatures2);
console.log('Temperature array amplitude:', tempAmplitudeNew);
*/

/*
///////////////////////////////////////
// LEZIONE 2: Debugging with the Console and Breakpoints (Sez. 5, lez. 61)

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',

    // 3. FIX BUG (aggiungo funzione Number per restiruire un numero)
    // value: Number(prompt('Degrees celsius:')), // la funzione prompt restituisce sempre una stringa ( se voglio un numero devo mettere il)
    value: 10,
  };

  // 2. FIND BUG
  console.log(measurement); // già analizzando l'oggetto si capisce che value è una stringa
  console.table(measurement); // posso stampare in console l'oggetto sotto forma di tabella
  // nella tabella, in FIREFOX, se i valori sono stringhe non vengono evidenziati tra virgolette

  console.log(measurement.value);
  console.warn(measurement.value);
  console.error(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};
// 1. IDENTIFY BUG
console.log(measureKelvin());

// Debugging with debugger (sources)
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);

  let max = 0; // assumiamo che il valore sia 0
  let min = 0; // assumiamo che il valore min sia 0

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i]; // creo variabile perché utilizzo più volte quel dato

    // debugger; // con l'istruzione debugger di JS il browser apre direttamente lo strumento debugger senza andare in sources
    if (typeof curTemp !== 'number') continue; // se non sono numeri il ciclo continua, terminando l'iterazione corrente e passa alla successiva senza eseguire la logica sottostante

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  console.log(`Max temp: ${max}, min temp: ${min}`);
  return max - min;
};

const tempAmplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
console.log('Temperature array amplitude:', tempAmplitudeBug);
*/
