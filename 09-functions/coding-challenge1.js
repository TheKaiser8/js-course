// Coding Challenge #1

// Let's build a simple poll app!
// A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter 'poll' object below.

// Your tasks:
// 1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
//     1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
//         What is your favourite programming language?
//         0: JavaScript
//         1: Python
//         2: Rust
//         3: C++
//         (Write option number)
//     1.2. Based on the input number, update the 'answers' array property. For example, if the option is 3, increase the value at position 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g. answer 52 wouldn't make sense, right?)
// 2. Call this method whenever the user clicks the "Answer poll" button.
// 3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1".
// 4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.
// 5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll object! So what should the this keyword look like in this situation?

// Test data for bonus:
// - Data 1: [5, 2, 3]
// - Data 2: [1, 5, 3, 9, 6, 1]

// Hints: Use many of the tools you learned about in this and the last section 😉

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    // Domando e ottengo input utente:
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    ); // join method per trasformare array in stringa
    console.log(answer);

    // Controllo che la risposta sia un numero compreso nelle opzioni di risposta e aumento di 1 quella risposta se presente
    if (typeof answer === 'number' && answer < this.options.length) {
      this.answers[answer]++;
      // OPPURE con short-circuiting e AND OPERATOR:
      // typeof answer === 'number' &&
      //   answer < this.options.length &&
      //   this.answers[answer]++;
      // console.log(this.answers);

      this.displayResults(); // chiamo il metodo per visualizzare risultati sottoforma di array
      this.displayResults('string'); // chiamo il metodo per visualizzare risultati sottoforma di array
    }
  },

  // Creo metodo che visualizzi in console i risultati del sondaggio
  // imposto 'array' come valore di default di type
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};
console.log(poll.answers);

// creando i metodi fuori dall'oggetto vengono eseguiti al caricamento della pagina e non solo all'evento del pulsante 'Answer poll!?""
// poll.registerNewAnswer = function () {
//   const answer = Number(
//     prompt(
//       `${this.question}\n${this.options.join('\n')}\n(Write option number)`
//     )
//   ); // join method per trasformare array in stringa
//   console.log(answer);
//   if (typeof answer === 'number' && answer < this.options.length) {
//     this.answers[answer]++;
//     // console.log(this.answers);
//   }

//   poll.displayResults = function (type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     }
//   };
//   // this.displayResults(this.answers);
//   poll.displayResults();
//   poll.displayResults('string');
// };
// poll.registerNewAnswer();

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

// BONUS:
// - Data 1: [5, 2, 3]
// - Data 2: [1, 5, 3, 9, 6, 1]

// Dobbiamo usare call method perché non vogliamo utilizzare l'array answers dell'oggetto poll, ma l'array di risposte casuali come data test, per cui passiamo un nuovo oggetto con la proprietà answers per impostare manualmente THIS keyword
poll.displayResults.call({ answers: [5, 2, 3] });
poll.displayResults.call({ answers: [5, 2, 3] }, 'string'); // specifico il type passato come stringa

poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string'); // specifico il type passato come stringa
