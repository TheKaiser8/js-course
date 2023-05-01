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

/////////////////////////////////////
// LEZIONE 2: Working With Classes (Sez. 7, lez. 80)

// creo variabile come closeModal anche per l'apertura della modale
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// posso paragonare NodeList ad un array, quindi posso fare un ciclo su di esso
for (let i = 0; i < btnsOpenModal.length; i++)
  /*
  btnsOpenModal[i].addEventListener('click', function () {
    console.log('Button clicked');
    modal.classList.remove('hidden'); // NON si utilizza il punto (.hidden), il punto è solo per il selettore
    overlay.classList.remove('hidden'); // rimuovendo la classe hidden posso visualizzare l'overlay con la modale aperta
  }); // visualizzo in console il testo di ogni button che mostra la modale
*/
  btnsOpenModal[i].addEventListener('click', openModal);
// con una istruzione su una sola riga posso evitare di utilizzare le parentesi graffe per aprire e chiudere il ciclo for

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal); // NON richiamiamo la funzione closeModal(), ma sarà JavaScript a richiamarla solo nel momento in cui si verificherà l'evento click. Noi immettiamo solamento la variabile closeModal come argomento della funzione
overlay.addEventListener('click', closeModal);
