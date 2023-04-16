/*
// LEZIONE 1: Values and Variables (Sez. 2, lez. 10)
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda"; // camelCase con 2 parole

console.log(firstName);
console.log(firstName);
console.log(firstName);

let firstNamePerson; // camelCase con più di 2 parole
let first_name_person; // popolare in linguaggi come Ruby

// I nomi delle variabili possono contenere solo NUMERI (NON come primo elemento), LETTERE, UNDERSCORES e $

// Alcune parole sono keyword RISERVATE, per cui non si possono utilizzare per nominare le variabili (esempio: function, new, ecc.)
let $function; // Metodi per ovviare alle keywords
let _new; // Metodi per ovviare alle keywords

let person = "jonas";
let PI = 3.1415; // Pi-greco, la variabile in MAIUSCOLO indica, in realtà, una costante

let myFirstJob = "Programmer"; // NO: let job1 = 'programmer';
let myCurrentJob = "Teacher"; // NO: let job2 = 'teacher';

console.log(myFirstJob, myCurrentJob);
*/

///////////////////////////////////////////////
// LEZIONE 2: Data Types (Sez. 2, lez. 12)
true; // valore BOOLEANO
let javascriptIsFun = true;
console.log(javascriptIsFun);

// typeof è un OPERATORE SPECIALE che permette di capire il tipo di dato di un valore
console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "Jonas");

// JS consente la TIPIZZAZIONE DINAMICA, ossia rende possibile assegnare un altro tipo di valore ad una variabile già dichiarata
javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun, javascriptIsFun);

let year;
console.log(typeof year, year);

year = 1991;
console.log(typeof year, year);

// CURIOSITà BUG: il valore null per JS viene tipizzato come un object, invece di essere definito undefined, questo è chiaramente un BUG che però non viene corretto per motivi di legacy (eredità)
console.log(typeof null);
