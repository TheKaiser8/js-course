/*
// Coding Challenge #3
// There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score)

// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉

// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy

// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

const team1 = "Dolphins";
const team2 = "Koalas";

let scoreAvgDolphins = (96 + 108 + 89) / 3;
let scoreAvgKoalas = (88 + 91 + 110) / 3;

console.log(`${team1}: ${scoreAvgDolphins}, ${team2}: ${scoreAvgKoalas}`);

if (scoreAvgDolphins > scoreAvgKoalas) {
  console.log(`I ${team1} battono i ${team2} e vincono il trofeo!`);
} else if (scoreAvgDolphins === scoreAvgKoalas) {
  console.log(`I 2 team pareggiano`);
} else {
  console.log(`I ${team2} battono i ${team1} e vincono il trofeo!`);
}

// BONUS 1:
scoreAvgDolphins = (97 + 112 + 101) / 3;
scoreAvgKoalas = (109 + 95 + 123) / 3;
const minimumScore = 100;

console.log(`${team1}: ${scoreAvgDolphins}, ${team2}: ${scoreAvgKoalas}`);

if (scoreAvgDolphins > scoreAvgKoalas && scoreAvgDolphins >= minimumScore) {
  console.log(`I ${team1} battono i ${team2} e vincono il trofeo!`);
} else if (scoreAvgDolphins === scoreAvgKoalas) {
  console.log(`I 2 team pareggiano e vincono entrambi il trofeo!`);
} else if (
  scoreAvgKoalas > scoreAvgDolphins &&
  scoreAvgKoalas >= minimumScore
) {
  console.log(`I ${team2} battono i ${team1} e vincono il trofeo!`);
} else {
  console.log(
    "Nessuno dei 2 team ha raggiunto il punteggio minimo stabilito per vincere il trofeo!"
  );
}

// BONUS 2:
scoreAvgDolphins = (97 + 112 + 101) / 3;
scoreAvgKoalas = (109 + 95 + 106) / 3;

console.log(`${team1}: ${scoreAvgDolphins}, ${team2}: ${scoreAvgKoalas}`);

if (scoreAvgDolphins > scoreAvgKoalas && scoreAvgDolphins >= minimumScore) {
  console.log(`I ${team1} battono i ${team2} e vincono il trofeo!`);
} else if (
  scoreAvgDolphins === scoreAvgKoalas &&
  scoreAvgDolphins >= minimumScore &&
  scoreAvgKoalas >= minimumScore
) {
  console.log(`I 2 team pareggiano e vincono entrambi il trofeo!`);
} else if (
  scoreAvgKoalas > scoreAvgDolphins &&
  scoreAvgKoalas >= minimumScore
) {
  console.log(`I ${team2} battono i ${team1} e vincono il trofeo!`);
} else {
  console.log(
    "Nessuno dei 2 team ha raggiunto il punteggio minimo stabilito per vincere il trofeo!"
  );
}
*/
