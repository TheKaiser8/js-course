'use strict';

/////////////////////////////////////
// PROJECT #3: Pig Game (Sez. 7, lez. 82-86)

// Seleziono elementi
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1'); // posso selezionare l'id mediante il metodo getElementById
const diceEl = document.querySelector('.dice');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Imposto condizioni iniziali
/*
score0El.textContent = 0; // per visualizzarli in pagina JS li convertirà in stringhe
score1El.textContent = 0;
diceEl.classList.add('hidden'); // nascondo img dado

const scores = [0, 0]; // creo array con i punteggi totali che andranno ad accumularsi [punteggio player0, punteggio player 1]
let currentScore = 0;
let activePlayer = 0; // creo variabile per cambiare dinamicamente il giocatore attivo
let playing = true; // creo variabile per definire lo stato del gioco (in corso: true, terminato: false)
*/

// REFACTORING: creo funzione per impostare le condizioni iniziali, ma dichiaro fuori le variabili per poterle utilizzare a livello globale e non solo nello scope della funzione
let scores, currentScore, activePlayer, playing;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden'); // nascondo img dado
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();

const switchPlayer = function () {
  // Riporto a 0 il punteggio corrente
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--active');

  // Cambio giocatore attivo
  activePlayer = activePlayer === 0 ? 1 : 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--active');
};

// Implemento funzionalità lancio dadi
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Genero numero di dadi casuale da 1 a 6
    let diceNumber = Math.trunc(Math.random() * 6) + 1;

    // 2. Visualizzo dado con l'immagine corrispondente al numero uscito
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${diceNumber}.png`; // imposto l'immagine del dado da visualizzare (caricamento dinamico img)

    // 3. Controllo se il numero uscito è = 1: se true passo al giocatore successivo
    if (diceNumber !== 1) {
      // Aggiungo il numero uscito al punteggio corrente e lo visualizzo in pagina
      currentScore += diceNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Riporto a 0 il punteggio corrente e cambio giocatore attivo
      switchPlayer();
    }
  }
});

// Implemento funzionalità per mantenere il punteggio corrente e definire il vincitore
btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Aggiungo current score al punteggio totale del giocatore attivo
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. Controllo se il giocatore ha un punteggio totale >= 100: se true il gioco termina, altrimenti cambio giocatore attivo
    if (scores[activePlayer] >= 100) {
      // Gioco terminato
      playing = false;
      diceEl.classList.add('hidden'); // nascondo img dado
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner'); // evidenzio sfondo vincitore
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active'); // rimuovo sfondo giocatore attivo
    } else {
      // Riporto a 0 il punteggio corrente e cambio giocatore attivo
      switchPlayer();
    }
  }
});

// Implemento funzionalità per resettare il gioco
btnNew.addEventListener('click', init);
