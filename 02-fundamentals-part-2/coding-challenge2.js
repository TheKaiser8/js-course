// Coding Challenge #2

// Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100
// 2. And now let's use arrays! So create an array 'bills' containing the test data below
// 3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before
// 4. Bonus: Create an array 'totals' containing the total values, so the bill + tip

// Test data: 125, 555 and 44

// Hint: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

// SOLUZIONE 1
// function calcTip(num) {
//     const tip = num >= 50 && num <= 300 ? num * 0.15 : num * 0.2; // condizione compresa tra 2 numeri
//     return tip;
// }

// console.log(calcTip(100));

// const tips = []; // array mance

// const bills = [125, 555, 44]; // array conti
// tips.push(calcTip(bills[0]));
// tips.push(calcTip(bills[1]));
// tips.push(calcTip(bills[2]));

// console.log(tips);

// const totals = []; // array totali (conto + mance)
// totals.push(bills[0] + tips[0]);
// totals.push(bills[1] + tips[1]);
// totals.push(bills[2] + tips[2]);

// console.log(totals);

// SOLUZIONE 2
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2; // condizione compresa tra 2 numeri
};

const bills = [125, 555, 44]; // array conti
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, totals);
