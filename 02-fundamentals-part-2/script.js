//////////////////////////////////
// LEZIONE 1: Activating Strict Mode (Sez. 3, lez. 32)

"use strict"; // per attivare la modalità rigorosa di questo script JS
// con questa modalità rendiamo il codice JS più sicuro perché evitiamo possibili errori accidentali e rendiamo visibili gli errori

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive");

// la modalità STRICT MODE ci aiuta anche a non utilizzare come nome di variabili parole riservate:
// const interface = "Audio";
// const private = 534;
*/

/*
//////////////////////////////////
// LEZIONE 2: Functions (Sez. 3, lez. 33)
// Function: pezzo di codice che possiamo riutilizzare più volte e che può ricevere o restituire dati

// questa è una semplice funzione didattica che stampa in console una stringa, non restituisce alcun valore
function logger() {
  console.log("My name is Jonas");
}

// calling / running / invoking function (sono parole diverse per indicare l'utilizzo di una funzione)
logger();
logger();
logger();

// funzione con 2 parametri (il parametro è il segnaposto, quindi in questo caso 'apples' e 'oranges')
function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice; // restituisce la variabile prodotta con questa funzione
}

// fruitProcessor(5, 0); // 5 e 0 sono gli argomenti della funzione, quindi il valore dei parametri
// per visualizzare il valore di questa funzione dobbiamo memorizzarla in una variabile
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
// Avremmo potuto anche stamparlo direttamente in console senza memorizzarlo in una variabile:
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// Number: funzione che converte una stringa in un numero
const num = Number("23");
console.log(num);
*/

/*
//////////////////////////////////
// LEZIONE 3: Function Declarations vs. Expressions (Sez. 3, lez. 34)
// In JS le FUNZIONI sono in realtà solo valori che possiamo o meno memorizzare in variabili

// Esempio di FUNCTION DECLARATION:
// function calcAge1(birthYear) {
//     // const age = 2037 - birthYear;
//     // return age;
//     // dobbiamo solamente restituire un valore, per cui non è necessario creare una variabile
//     return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);
// console.log(age1);

// Esempio di FUNCTION EXPRESSION (funzione senza un nome assegnato, FUNZIONE ANONIMA):
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1991);
console.log(age2);

// DIFFERENZA PRINCIPALE tra FUNCTION DECLARATION e FUNCTION EXPRESSION: le FUNCTION DECLARATION possono essere chiamate prima che vengano definite nel codice

// Quindi la funzione calcAge1 può essere scritta in questo modo:
const age1 = calcAge1(1991); // posso richiamarla prima di definirla
console.log(age1);

function calcAge1(birthYear) {
  return 2037 - birthYear; // posso definirla dopo averla richiamata
}

// si possono utilizzare le 2 tipologie di FUNZIONI in base alla propria preferenza, la cosa importante è conoscerle e saperle riconoscere
*/

/*
//////////////////////////////////
// LEZIONE 4: Arrow Functions (Sez. 3, lez. 35)
// ARROW FUNCTIONS: sono function expressions in forma contratta, introdotte da ES6

// Function EXPRESSION:
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

// ARROW FUNCTION: la funzione return è implicita e viene scritta in una sola riga quando è semplice (con poco codice e un parametro solo)
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

// ARROW FUNCTION con più righe di codice e 1 PARAMETRO solo
// const yearUntilRetirement = birthYear => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age; // anni mancanti al pensionamento
//     return retirement;
// }

// console.log(yearUntilRetirement(1991));

// ARROW FUNCTION con più righe di codice e PIù PARAMETRI
const yearUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age; // anni mancanti al pensionamento
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearUntilRetirement(1991, "Jonas"));
console.log(yearUntilRetirement(1980, "Bob"));

// Una differenza molto importante tra le funzioni (declarations, expressions e arrows) è che le ARROW FUNCTIONS non ottengono la parola chiave THIS
*/

/*
//////////////////////////////////
// LEZIONE 5: Functions Calling Other Functions (Sez. 3, lez. 36)
// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

const cutFruitPieces = (fruit) => fruit * 4; // con ARROW FUNCTION

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice; // restituisce la variabile prodotta con questa funzione
}

console.log(fruitProcessor(2, 3));
*/

/*
//////////////////////////////////
// LEZIONE 6: Reviewing Functions (Sez. 3, lez. 37)
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age; // anni mancanti al pensionamento

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired!`);
    return -1; // numero standard di ritorno per indicarci che non ha significato
  }
  // return `${firstName} retires in ${retirement} years`;
};
console.log(yearUntilRetirement(1991, "Jonas"));
console.log(yearUntilRetirement(1970, "Mike"));
*/

/*
//////////////////////////////////
// LEZIONE 7: Introduction to Arrays (Sez. 3, lez. 39)
// ARRAY: struttura dati che funge da contenitore di valori

const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"]; // literal syntax
console.log(friends);

// Altro modo per creare un ARRAY: utilizzando la funzione new Array
const years = new Array(1991, 1984, 2008, 2020);
console.log(years);

console.log(friends[0]); // gli ARRAY sono a base 0, pertanto il primo elemento è il numero 0 (Michael)
console.log(friends[2]); // Peter

console.log(friends.length); // numero elemento di un ARRAY, NON è in base 0, quindi indica il numero effettivo di elementi
console.log(friends[friends.length - 1]); // per ricavare l'ultimo elemento di un ARRAY

friends[2] = "Jay"; // per mutare/cambiare un elemento di un ARRAY
console.log(friends);
// Nonostante l'ARRAY sia stato dichiarato come variabile CONST, è stato possibile modificarlo perché un ARRAY non è un valore primitivo (primitive value)

// Quello che NON è possibile fare è modificare l'intero ARRAY, infatti risulta illegale
// friends = ['Bob', 'Alice'];

// ARRAY con valori di tipologie differenti:
const firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends]; // inserendo friends si inserisce un ARRAY dentro un ARRAY
console.log(jonas);
console.log(jonas.length);

// Exercise
const calcAge = (birthYear) => 2037 - birthYear;
const years2 = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years2[0]);
const age2 = calcAge(years2[1]);
const age3 = calcAge(years2[years2.length - 1]);

console.log(age1, age2, age3);

// const ages = [calcAge(years2[0]), calcAge(years2[1]), calcAge(years2[years2.length - 1])] // posso creare un array anche con le funzioni di espressioni perchè producono un valore
const ages = [age1, age2, age3]; // creo array con le età calcolate
console.log(ages);
*/

//////////////////////////////////
// LEZIONE 8: Basic Array Operations (Methods) (Sez. 3, lez. 40)
const friends = ["Michael", "Steven", "Peter"];

// ADD ELEMENT:
// PUSH METHOD: funzione che permette di aggiungere elementi alla FINE DI un ARRAY
// friends.push('Jay');
console.log(friends);
// Il metodo push restituisce un valore, quindi se ci serve il valore della LUNGHEZZA dell'array possiamo memorizzare il dato in una variabile
const newLength = friends.push("Jay");
console.log(newLength);

// UNSHIFT METHOD: funzione che permette di aggiungere elementi all'INIZIO di un ARRAY
friends.unshift("John"); // salvato in variabile restituisce la LUNGHEZZA dell'array
console.log(friends);

// REMOVE ELEMENT
// POP METHOD: funzione che permette di eliminare l'ULTIMO ELEMENTO di un ARRAY
// friends.pop(); // remove LAST
const popped = friends.pop(); // memorizzato in variabile restituisce l'ELEMENTO RIMOSSO
console.log(popped);
console.log(friends);

// SHIFT METHOD: funzione che permette di eliminare il PRIMO ELEMENTO di un ARRAY
friends.shift(); // remove FIRST, come il metodo pop memorizzato in variabile restituisce l'ELEMENTO RIMOSSO
console.log(friends);

// FIND INDEX/ELEMENT
// INDEXOF METHOD: funzione che permette di ricavare l'INDICE di un elemento di un array
console.log(friends.indexOf("Steven")); // 1
console.log(friends.indexOf("Bob")); // -1, indice di un elemento che NON ESISTE

// INCLUDES METHOD: funzione che permette di verificare se un elemento di un array è PRESENTE (TRUE) o NO (FALSE) => restituisce un valore BOOLEANO
console.log(friends.includes("Steven")); // true
console.log(friends.includes("Bob")); // false
// includes method esegue un'uguaglianza rigorosa (STRICT EQUALITY) e viene utilizzato per creare delle condizioni
if (friends.includes("Steven")) {
  console.log("You have a friend called Steven");
}
