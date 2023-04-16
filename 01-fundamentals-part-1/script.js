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

/*
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
*/

/*
///////////////////////////////////////////////
// LEZIONE 3: let, const and var (Sez. 2, lez. 13)
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990; // NON è possibile riassegnare il valore di una costante

// const job; // NON è possibile dichiarare una COSTANTE VUOTA

// var e let sono apparentemente molto simili, ma let è nell'ambito del blocco (block scope) e var nell'ambito della funzione (function scope)
var job = "programmer";
job = "teacher";

// JS consente di creare una variabile senza dichiarare il tipo di variabile, ma NON si dovrebbe MAI fare perché JS crea la variabile nell'intero OGGETTO GLOBALE e non solamente nello SCOPE CORRENTE
lastName = "Schmedtmann";
console.log(lastName);
*/

/*
///////////////////////////////////////////////
// LEZIONE 4: Basic Operators (Sez. 2, lez. 14)
// const ageJonas = 2037 - 1991;
// const ageSarah = 2037 - 2018;
// console.log(ageJonas, ageSarah) // 46, 19
// Ma stiamo ripetendo 2 volte lo stesso numero, per cui creiamo una variabile per definire l'anno corrente

// Operatori matematici (math operators):
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah); // 46, 19

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 significa 2 alla potenza di 3 = 2 * 2 * 2 (2 alla 3a)

// Operatore + per le stringhe --> concatenazione di 2 o più stringhe:
const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName); // creo stringa con spazio vuoto per creare uno spazio tra firstName e lastName

// Operatore typeof già affrontato in LEZIONE 2

// Operatori di assegnazione (assignments operator):
let x = 10 + 5; // 15
x += 10; // x = x + 10 --> x = 15 + 10 = 25
x *= 4; // x = x * 4 --> x = 25 * 4 = 100
x++; // x = x + 1 --> x = 100 + 1 = 101
x--; // x = 100
x--; // x = 99
console.log(x);

// Operatori di confronto (comparison operator: >, <, >=, <=) per produrre valori BOOLEANI (true or false):
console.log(ageJonas > ageSarah); // true
console.log(ageSarah >= 18); // true

const isFullAge = ageSarah >= 18; // variabile che restituisce un valore booleano come risultato (true in questo caso)

// Operatori matematici + operatori di confronto:
console.log(now - 1991 > now - 2018); // true perché 46 > 19 --> JS sa automaticamente eseguire prima le operazioni matematiche e poi quelle di confronto
*/

///////////////////////////////////////////////
// LEZIONE 5: Operator Precedence (Sez. 2, lez. 15)
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);

// MDN web docs --> operator precedence per tabella precedenza operatori
// L'operatore matematico meno (-) ha una precedenza superiore all'operatore di confronto (>), per cui viene eseguito prima
console.log(25 - 10 - 5); // 10; esecuzione da sinistra a destra

let x, y;
x = y = 25 - 10 - 5; // x = y = 10; y = 10 e x = 10 perchè le operazioni di assegnazione avvengono da destra verso sinistra, quindi prima y e poi x
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
