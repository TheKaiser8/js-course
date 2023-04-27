// LEZIONE 1: Activating Strict Mode (Sez. 3, lez. 32)

"use strict"; // per attivare la modalità rigorosa di questo script JS
// con questa modalità rendiamo il codice JS più sicuro perché evitiamo possibili errori accidentali e rendiamo visibili gli errori

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive");

// la modalità STRICT MODE ci aiuta anche a non utilizzare come nome di variabili parole riservate:
// const interface = "Audio";
// const private = 534;
