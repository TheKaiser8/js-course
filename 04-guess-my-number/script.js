'use strict';

/////////////////////////////////////
// LEZIONE 1: PROJECT #1: Guess My Number! (Sez. 7, lez. 70)

document.querySelector('.message'); // per selezionare l'elemento con la classe (selettore) message
// per visualizzare in console la classe selezionata basta racchiudere il tutto in console.log
console.log(document.querySelector('.message'));

console.log(document.querySelector('.message').textContent); // per leggere il testo presente in questo elemento

/////////////////////////////////////
// LEZIONE 2: Selecting and Manipulating Elements (Sez. 7, lez. 72)

document.querySelector('.message').textContent = '🎉 Numero corretto!'; // per settare il testo dell'elemento
console.log(document.querySelector('.message').textContent); // per leggere il testo presente in questo elemento

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

console.log(document.querySelector('.guess').value); // per leggere il valore dell'elemento input in questo caso
document.querySelector('.guess').value = 23; // per settare il valore dell'elemento

/////////////////////////////////////
// LEZIONE 3: Handling Click Events (Sez. 7, lez. 73)

document.querySelector('.check').addEventListener('click', function () {
  //   console.log(document.querySelector('.guess').value);
  const guess = Number(document.querySelector('.guess').value); // salvo il valore in una variabile chiamata guess
  console.log(typeof guess, guess); // i valori ottenuti dall'UI, in questo caso da un campo input, sono solitamente stringhe per cui dobbiamo trasformarli in numeri

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ Nessun numero!';
  }

  document.querySelector('.number').textContent = guess; // prova per stampare il numero inserito
});
// NOTA che non richiamiamo la funzione, la definiamo solamente. JavaScript Engine la richiamerà solamente nel momento in cui avverrà l'evento click
