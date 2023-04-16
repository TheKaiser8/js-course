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

/*
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
*/

/*
///////////////////////////////////////////////
// LEZIONE 6: Strings and Template Literals (Sez. 2, lez. 17)
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(jonas);

// Stringhe con TEMPLATE LITERAL:
const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

// Stringa multilinea SENZA template literal:
console.log(
  "String with \n\
multiple \n\
lines"
);

// Stringa multilinea con TEMPLATE LITERAL:
console.log(`String with
multiple
lines`);
*/

/*
///////////////////////////////////////////////
// LEZIONE 7: Taking Decisions: if / else Statements (Sez. 2, lez. 18)
const age = 15;

// // metodo NON comune:
// const isOldEnough = age >= 18; // restituisce valore booleano

// SE la condizione è VERA verrà eseguito questo blocco di codice
// if(isOldEnough) {
//     console.log('Sarah can start driving license 🚗')
// }

// metodo COMUNE (viene definita struttura di controllo (control structure)):
if (age >= 18) {
  console.log("Sarah can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years 😉`);
}
// else è un blocco opzionale, se non contiene blocchi di codice può essere omesso

const birthYear = 1991;
let century;

if (birthYear <= 2000) {
  century = 20; // mi aspetto questo risultato
} else {
  century = 21;
}
console.log(century);
*/

/*
///////////////////////////////////////////////
// LEZIONE 8: Type Conversion and Coercion (Sez. 2, lez. 20)

// TYPE CONVERSION: (conversione manuale, utilizzata raramente)
const inputYear = "1991"; // 1991 scritto in questo modo è una stringa
console.log(inputYear + 18); // restituisce 199118 perché crea una stringa da 2 stringhe (NON fa il calcolo numerico essendo '1991' una stringa)

// Per utilizzare una stringa come numero possiamo utilizzare la funzione Number():
console.log(Number(inputYear) + 18); // 2009
// il valore di input originale non cambia, rimane una stringa, viene solo utilizzato come numero
console.log(Number(inputYear), inputYear); // 1991, "1991"

// Provando a convertire una stringa che non può essere convertita in un numero:
const firstName = "Jonas";
console.log(Number(firstName)); // restituisce NaN (Not a number)
console.log(typeof NaN); // restituisce number perché è un numero non valido, ma comunque un numero

// Conversione numero in stringa:
console.log(String(23)); // restituisce 23 sotto forma di stringa --> "23"

// N.B. Una funzione deve sempre iniziare con la prima lettera MAIUSCOLA (Number, String, ecc.)

// TYPE COERCION: (conversione automatica di JS)
console.log("I am " + 23 + " years old"); // operatore + converte in automatico da numero a stringa, non il contrario
console.log("23" - "10" - 3); // operatore - converte in automatico da stringa a numero, non il contrario
console.log("23" + "10" + 3); // operatore + restituisce 23103

// Gli operatori * e / funzionano invece nell'unico modo possibile
console.log("23" * "2"); // 46
console.log("23" / "2"); // 11.5

// Gioco indovina l'output:
let n = "1" + 1; // 11
n = n - 1; // 10
console.log(n);

// 2+3+4+'5' = 9+'5' = "95"
// '10'-'4'-'3'-2+'5' = "15"
*/

// LEZIONE 9: Truthy and Falsy Values (Sez. 2, lez. 21)
// In JS esistono solo 5 valori FALSI (falsy value): 0, empty string "", undefined, null e NaN (not a number)
console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean("Jonas")); // true
console.log(Boolean({})); // ---> oggetto vuoto: true
console.log(Boolean("")); // false
// la funzione Boolean (trasformazione in valore booleano) non è mai utilizzata in pratica, qui è utlizzata per spiegare i valori veri o falsi

const money = 1;
// in un'istruzione if/else JS forzerà qualsiasi variabile per convertirla in una di tipo booleano
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job!");
}

let height;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}
