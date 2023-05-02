// Coding Challenge #2

// Let's continue with our football betting app! Keep using the 'game' variable from before.

// Your tasks:
// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
//     Odd of victory Bayern Munich: 1.33
//     Odd of draw: 3.25
//     Odd of victory Borussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). Hint: Note how the odds and the game objects have the same property names 😉
// 4. Bonus: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
// {
// Gnabry: 1,
// Hummels: 1,
// Lewandowski: 2
// }

const game = {
  team1: 'Bayern Munich',
  team2: 'Borussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnabry',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnabry', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

for (const [i, playerName] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${playerName}`); // Goal 1: Lewandowski, ecc.
}

// Soluzione 1 per calcolare la media di odds:
const calculateAvg = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
};
console.log(calculateAvg(5, 10, 15));

const odds = Object.values(game.odds);
console.log(odds);

console.log(calculateAvg(...odds));

// Soluzione 2 per calcolare la media di odds:
let average = 0;
for (const odd of odds) {
  average += odd;
}
average /= odds.length;
console.log(average);

// Soluzione 1 (+ logica) per scrivere le stringhe con le quote (odds):
for (const [key, odd] of Object.entries(game.odds)) {
  if (key === 'team1') {
    console.log(`Odd of victory ${game.team1}: ${odd}`);
  } else if (key === 'team2') {
    console.log(`Odd of victory ${game.team2}: ${odd}`);
  } else {
    console.log(`Odd of draw: ${odd}`);
  }
}

// Soluzione 2 (meno logica, meno codice) per scrivere le stringhe con le quote (odds):
for (const [key, odd] of Object.entries(game.odds)) {
  const teamStr = key === 'x' ? 'draw' : `victory ${game[key]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}

// BONUS:
const scorers = {};

for (const player of game.scored) {
  console.log(player);

  // Controllo se il nome del giocatore è già una proprietà nell'oggetto 'scorers':
  // Se lo è, incremento di 1 il valore di quella proprietà
  // Se non lo è, creo una nuova proprietà con il nome del giocatore e il valore iniziale di 1
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);
