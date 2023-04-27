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
