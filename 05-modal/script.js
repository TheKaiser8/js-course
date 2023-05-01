'use strict';

/////////////////////////////////////
// LEZIONE 1: PROJECT #2: Modal Window (Sez. 7, lez. 79)

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal'); // querySelectorAll per selezionare più elementi con la stessa classe, con querySelector verrebbe selezionata solo il primo elemento con quella classe
console.log(btnsOpenModal);

// posso paragonare NodeList ad un array, quindi posso fare un ciclo su di esso
for (let i = 0; i < btnsOpenModal.length; i++)
  console.log(btnsOpenModal[i].textContent); // visualizzo in console il testo di ogni button che mostra la modale
// con una istruzione su una sola riga posso evitare di utilizzare le parentesi graffe per aprire e chiudere il ciclo for
