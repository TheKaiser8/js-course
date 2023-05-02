// Coding Challenge #2

// This is more of a thinking challenge than a coding challenge 🤓

// Your tasks:
// 1. Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the body element is clicked. Do not select the h1 element again!
// 2. And now explain to yourself (or someone around you) why this worked! Take all the time you need. Think about when exactly the callback function is executed, and what that means for the variables involved in this example.

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  //   document.body.addEventListener('click', function () {
  //     // Aggiunta condizione di cambio colore h1 ad ogni click
  //     if (header.style.color === 'red') {
  //       header.style.color = 'blue';
  //     } else {
  //       header.style.color = 'red';
  //     }
  //   });

  // il codice sottostante permette di cambiare colore di h1 ad ogni click sul body (con ciclo infinito e unidirezionale (da giallo si riparte con il rosso) grazie al MODULO OPERATOR)
  const colors = ['red', 'blue', 'green', 'yellow'];
  let colorIndex = 0;

  document.body.addEventListener('click', function () {
    colorIndex = (colorIndex + 1) % colors.length;
    header.style.color = colors[colorIndex];
  });
})();
