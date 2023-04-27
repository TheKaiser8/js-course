"use strict";

//////////////////////////////////
// LEZIONE 2: Functions (Sez. 3, lez. 33)
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
