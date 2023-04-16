/*
// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).

// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

// 1.1
let markWeight = 78;
let markHeight = 1.69;
console.log("peso e altezza Mark", markWeight, markHeight);

let johnWeight = 92;
let johnHeight = 1.95;
console.log("peso e altezza John", johnWeight, johnHeight);

// 1.2
let markBMI = markWeight / markHeight ** 2;
let johnBMI = johnWeight / johnHeight ** 2;
console.log("Mark BMI", markBMI, "John BMI", johnBMI);

// 1.3
let markHigherBMI = markBMI > johnBMI;
console.log("MarkBMI > JohnBMI ?", markHigherBMI);

// 2.1
markWeight = 95;
markHeight = 1.88;
console.log("peso e altezza Mark", markWeight, markHeight);

johnWeight = 85;
johnHeight = 1.76;
console.log("peso e altezza John", johnWeight, johnHeight);

// 2.2
markBMI = markWeight / markHeight ** 2;
johnBMI = johnWeight / johnHeight ** 2;
console.log("Mark BMI", markBMI, "John BMI", johnBMI);

// 2.3
console.log("MarkBMI > JohnBMI ?", markHigherBMI);
*/
