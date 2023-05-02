// Coding Challenge #1

// We're building a football betting app (soccer for my American friends 😅)!
// Suppose we get data from a web service about a certain game ('game' variable on next page). In this challenge we're gonna work with that data.

// Your tasks:
// 1. Create one player array for each team (variables 'players1' and'players2')
// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// 3. Create an array 'allPlayers' containing all players of both teams (22 players)
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// 6. Write a function ('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using an if/else statement or the ternary operator.

// Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
// Then, call the function again with players from game.scored

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

// Soluzione senza destructuring (1.):
// const players1 = [...game.players[0]];
// console.log(game.team1, players1);
// const players2 = [...game.players[1]];
// console.log(game.team2, players2);

// Soluzione con destructuring (1.):
const [players1, players2] = game.players;
console.log(players1, players2);

// 2. REST operator
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3. SPREAD operator
const allPlayers = [...players1, ...players2];
console.log('Tutti i 22 giocatori:', allPlayers);

// 4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(`${game.team1} con sostituti:`, players1Final);

// // Soluzione senza oggetto annidato (5.)
// const { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);
// Soluzione con oggetto annidato (5.)
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6. REST parameters (passiamo un numero di argomenti arbitrario)
const printGoals = function (...playerNames) {
  goals = playerNames.length;
  console.log(...playerNames, goals);
  // OPPURE
  console.log(`${playerNames.length} goals were scored!`);
};
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

// 7. logical assignment operator (AND operator)
game.odds.team1 < game.odds.team2 &&
  console.log(`${game.team1} is more likely to win!`);
game.odds.team1 > game.odds.team2 &&
  console.log(`${game.team2} is more likely to win!`);
// Soluzione più compressa:
team1 < team2 && console.log(`${game.team1} is more likely to win!`);
team1 > team2 && console.log(`${game.team2} is more likely to win!`);
