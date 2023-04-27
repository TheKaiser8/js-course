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

/*
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
*/

/*
//////////////////////////////////
// LEZIONE 9: Introduction to Objects (Sez. 3, lez. 42)
// OBJECTS: struttura dati che ci permette di dare un nome ad ogni valore (coppia CHIAVE-VALORE)
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Steven", "Peter"],
};
// ogni chiave è anche definita PROPRIETà (property), quindi questo OGGETTO ha 5 PROPRIETà

// ***A differenza degli array, negli OGGETTI l'ordine delle proprietà NON è importante!
*/

/*
//////////////////////////////////
// LEZIONE 10: Dot vs. Bracket Notation (Sez. 3, lez. 43)
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Steven", "Peter"],
};
console.log(jonas);

// RECUPERO E ACCESSO DATI OGGETTO:
console.log(jonas.lastName); // DOT NOTATION
console.log(jonas["lastName"]); // BRACKET NOTATION (necessario specificare una stringa con il nome della proprietà)

// ***Utilizzando la BRACKET NOTATION possiamo utilizzare un'espressione tra le parentesi per, ad esempio, calcolare il valore di una stringa (come una concatenazione)
const nameKey = "Name"; // parte ripetuta di 2 proprietà (firstName e lastName)
console.log(jonas["first" + nameKey]); // tra le square bracket posso mettere un'espressione
console.log(jonas["last" + nameKey]);

const interestedIn = prompt(
  "What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends"
);
console.log(jonas.interestedIn); // undefined viene visualizzato in console quando tentiamo di accedere ad una proprietà di un oggetto che non esiste (undefined è un valore falso)

// Con la BRACKET NOTATION riusciamo ad ottenere la proprietà che ci interessa:
console.log(jonas[interestedIn]); // in questo modo JS sostituisce interestedIn con il valore effettivo della variabile che sarà il valore cercato nell'oggetto Jonas

// Creo una condizione per visualizzare in console una risposta consona al valore inserito nel prompt
if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job and friends"
  );
}

// AGGIUNGERE DATI OGGETTO:
jonas.location = "Portugal"; // DOT NOTATION
jonas["twitter"] = "@jonasschmedtman"; // BRACKET NOTATION
console.log(jonas);

// CHALLENGE
// Jonas has 3 friends, and his best friend is called Michael
console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
);
*/

/*
//////////////////////////////////
// LEZIONE 11: Object Methods (Sez. 3, lez. 44)
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Steven", "Peter"],
  hasDriversLicense: true,

  // ottenendo un valore con una funzione, possiamo far sì che la proprietà di un oggetto abbia come valore il risultato di una funzione (ogni funzione collegata ad un OGGETTO è definita METODO)
  // *** Un METODO è in realtà anche una PROPRIETà
  // calcAge: function(birthYear) {
  //     return 2037 - birthYear;
  // }

  // utilizzando una speciale variabile (this) possiamo rendere il codice meno ripetitivo ("don't repeat yourself(DRY)")
  // calcAge: function() {
  //     return 2037 - this.birthYear;
  // }

  // se abbiamo bisogno di utilizzare/richiamare il dato più volte, è opportuno salvarlo in una variabile per non eseguire più volte il calcolo attraverso la funzione:
  calcAge: function () {
    this.age = 2037 - this.birthYear; // creo una nuova proprietà di questo oggetto utilizzando il metodo this
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`; // utilizzo il metodo calcAge invece di richiamare la proprietà age perché non posso presumere che sia stato già richiamato prima il metodo calcAge, quindi la proprietà age potrebbe non esistere ancora
  },
};
console.log(jonas.calcAge(1991)); // DOT NOTATION
console.log(jonas["calcAge"](1991)); // BRACKET NOTATION

// con metodo THIS: possiamo leggere direttamente il dato contenuto nell'oggetto senza passare alcun parametro
console.log(jonas.calcAge()); // Jonas è l'oggetto che sta chiamando il metodo calcAge

// creando una variabile AGE per avere la soluzione più EFFICIENTE:
console.log(jonas.age);

// CHALLENGE:
// "Jonas is a 46-year old teacher, and he has a driver's license"
console.log(jonas.getSummary());
*/

/*
//////////////////////////////////
// LEZIONE 12: Iteration: The for Loop (Sez. 3, lez. 46)
// Come if.. else, anche i loops sono strutture di controllo

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️`);
}
*/

/*
//////////////////////////////////
// LEZIONE 13: Looping Arrays, Breaking and Continuing (Sez. 3, lez. 47)
const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Steven", "Peter"],
  true,
];

const types = [];

for (let i = 0; i < jonas.length; i++) {
  // reading from jonas array
  console.log(jonas[i], typeof jonas[i]); // l'array è effettivamente un oggetto

  // filling types array (riempire l'array dei tipi)
  // types[i] = typeof jonas [i]; // MODO 1
  types.push(typeof jonas[i]); // MODO 2 (PUSH METHOD)
}

console.log(types);

// for loop years array and push in ages array
const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

// statement continue & break statement
// CONTINUE viene utilizzato per interrompere l'interazione corrente del ciclo e continuare con quella successiva
console.log("--- ONLY STRINGS ---");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== "string") continue; // se non sono stringhe il ciclo continua e non vengono stampate in console (con CONTINUE vengono saltati i valori che non rispettano la condizione)

  console.log(jonas[i], typeof jonas[i]);
}

console.log("--- BREAK AFTER NUMBER ---");
// BREAK viene utilizzato per terminare completamente l'intero ciclo
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === "number") break; // il ciclo viene terminato appena viene trovato un numero

  console.log(jonas[i], typeof jonas[i]);
}
*/

/*
//////////////////////////////////
// LEZIONE 14: Looping Backwards and Loops in Loops (Sez. 3, lez. 48)
const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Steven", "Peter"],
  true,
];

// backwards for loop: ciclo for sugli elementi di un array partendo dall'ultimo elemento
for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}

// loop inside in loop: 3 esercizi con 5 ripetizioni ciascuno
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`--------- Starting exercise ${exercise}`);

  for (let rep = 1; rep <= 5; rep++) {
    console.log(`Exercise ${exercise}: lifting weight repetition ${rep} 🏋️`);
  }
}
*/

/*
//////////////////////////////////
// LEZIONE 15: The while Loop (Sez. 3, lez. 49)
// console.log('--- FOR LOOP ---');
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep} 🏋️`);
// }

// while loop: possiamo specificare solo un condizione (è più versatile del ciclo for perché non ha bisogno necessariamente di un contatore, è indispensabile solo la condizione che deve essere vera per continuare a funzionare)
console.log("--- WHILE LOOP ---");
let rep = 1;
while (rep <= 10) {
  console.log(`Lifting weights repetition ${rep} 🏋️`);
  rep++;
}

// esempio che non dipende da un contatore ma solamente da una variabile casuale (non sappiamo quando dovrà finire il ciclo --> WHILE LOOP)
// DESCRIZIONE: programma che lancia i dadi fino a che non esce 6
console.log("--- PROGRAMMA LANCIO DADI ---");
let diceDecimal01 = Math.random(); // numero casuale tra 0 e 1 con decimali
let diceDecimal16 = Math.random() * 6; // numero casuale tra 0 e 5 con decimali
let dice = Math.trunc(Math.random() * 6) + 1; // numero casuale tra 1 e 6
console.log(diceDecimal01, diceDecimal16, dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`); // se avessimo solo questa riga di codice, a questo punto (se non uscisse il numero 6) sarebbe un ciclo infinito e il browser andrebbe in crash
  dice = Math.trunc(Math.random() * 6) + 1; // numero casuale tra 1 e 6
  if (dice === 6) console.log(`Loop is about to end... You rolled a ${dice}!`);
}
*/
