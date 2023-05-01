'use strict';

/*
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
*/

/*
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
*/

/////////////////////////////////////
// LEZIONE 4: Implementing the Game Logic (Sez. 7, lez. 74)

// creo il numero segreto da indovinare (fuori dalla funzione evento, altrimenti il numero cambierebbe ad ogni click e il gioco non avrebbe significato)
const secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
document.querySelector('.number').textContent = secretNumber;

let score = 20; // creo variabile score che parte da 20 (punteggio MAX)

document.querySelector('.check').addEventListener('click', function () {
  // console.log(document.querySelector('.guess').value);
  const guess = Number(document.querySelector('.guess').value); // salvo il valore in una variabile chiamata guess
  console.log(typeof guess, guess); // i valori ottenuti dall'UI, in questo caso da un campo input, sono solitamente stringhe per cui dobbiamo trasformarli in numeri

  // Quando non c'è l'input (non viene inserito alcun numero)
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ Nessun numero!';

    // Quando il giocatore indovina il numero segreto
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Numero corretto!';

    // Quando il numero è superiore a 20
  } else if (guess > 20) {
    document.querySelector('.message').textContent =
      '🚫 Non è un numero compreso tra 1 e 20!';

    // Quando il numero è troppo alto
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Numero troppo alto!';
      score--; // OPPURE score -= 1; OPPURE score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '❌ Hai perso!';
      document.querySelector('.score').textContent = 0;
    }

    // Quando il numero è troppo basso
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        '📉 Numero troppo basso!';

      score--; // OPPURE score -= 1; OPPURE score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '❌ Hai perso!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
