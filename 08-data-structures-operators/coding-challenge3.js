// Coding Challenge #3

// Let's continue with our football betting app! This time, we have a map called 'gameEvents' (see below) with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

// Your tasks:
// 1. Create an array 'events' of the different game events that happened (no duplicates)
// 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
// 3. Compute and log the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
// 4. Loop over 'gameEvents' and log each element to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this: [FIRST HALF] 17: ⚽ GOAL

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1. Creo un set dei valori della mappa di gameEvents per non avere duplicati, decomprimo il set e racchiudo tutti i valori ottenuti dentro un array
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2. Elimino l'evento registrato erroneamente attraverso la sua chiave
gameEvents.delete(64);
console.log(gameEvents);

// 3. Calcolo la media degli eventi successi nell'arco dei 90 minuti e stampo una stringa esplicativa
const timeGame = 90;
const eventsAvg = timeGame / gameEvents.size;
console.log(eventsAvg);
console.log(`An event happened, on average, every ${eventsAvg} minutes`);

// Soluzione con calcolo direttamente nella stringa:
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

// BONUS: soluzione con tempo più preciso (90 minuti + recupero):
const time = [...gameEvents.keys()].pop(); // ottengo le chiavi della mappa gameEvents, decomprimo la mappa, racchiudo tutte le chiavi in un array e prendo l'ultimo elemento (pop method)
console.log(time);
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

// 4. Eseguo un ciclo sui gameEvents destrutturando gli elementi della mappa in chiave e valore per poterli registrare in console
for (const [min, event] of gameEvents) {
  if (min <= 45) {
    console.log(`[FIRST HALF] ${min}: ${event}`);
  } else {
    console.log(`[SECOND HALF] ${min}: ${event}`);
  }
}

// Soluzione creando una variabile con operatore ternario per definire 1° e 2° tempo:
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
}
