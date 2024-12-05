console.log("Exercise 1");
var myName = "hassan";
console.log(myName);

console.log("Exercise 2");
var myAge = 30;
console.log(myAge);

console.log("Exercise 3");
var juliaAge = 32;
var ageDiff = myAge - juliaAge;
console.log(ageDiff);

console.log("Exercise 4");
if (myAge > 21) {
  console.log(" you are older than 21");
} else {
  console.log("you are not older than 21");
}
console.log("Exercise 5");
if (myAge < juliaAge) {
  console.log("julia is older than you");
} else if (myAge > juliaAge) {
  console.log("julia is younger than you");
} else {
  console.log("you have the same age");
}

console.log("Exercise 6");
const names = ["Hassan", "Dima", "Diogo", "Tom", "Maria", "Jonas", "Raul"];
console.log(names[0]);
console.log(names[6]);

for (i = 0; i < names.length; i++) {
  console.log(names[i]);
}
console.log("Exercise 7");
const studentAges = [30, 18, 33, 32, 29, 27, 38, 34];
i = 0;
while (i <= 7) {
  console.log(studentAges[i]);
  i++;
}
console.log("Exercise 7");
i = 0;
while (i <= 7) {
  if (studentAges[i] % 2 == 0) console.log(studentAges[i]);
  i++;
}

console.log("Exercise 8");
sum = 0;
for (i = 0; i < studentAges.length; i++) {
  sum += studentAges[i];
}
console.log(sum);

console.log("Exercise 9");
sum = 0;
for (i = 0; i <= studentAges.length; i++) {
  if (studentAges[i] % 2 == 0) {
    sum += studentAges[i];
  }
}
console.log(sum);

console.log("Exercise 10");
sum = 0;
for (i = 1; i < studentAges.length; i++) {
  if (i % 2 == 0) {
    sum += studentAges[i];
  }
}
console.log(sum);

console.log("Exercise 11");

function multiply() {
  let a = 5;
  let b = 2;
  console.log(a * b);
}

multiply();

console.log("Exercise 12");
function multiplication() {
  let a = 5;
  let b = 2;
  return a * b;
}
multiplication();
console.log(multiplication());

console.log("Exercise 13");
console.log("example one");
function multinummbers(a, b) {
  a = 6;
  b = 2;
  return a * b;
}
console.log(multinummbers());
console.log("exapmle two");
function twonumbers(a, b) {
  let x = 6 * 2;
  return x;
}
console.log("the result is:" + twonumbers());
console.log("example three");
function multiply2(a, b) {
  let y = 6 * 2;
  return y;
}
console.log(multiply2());

console.log("Exercise 14");
function triangleTypeof(a, b, c) {
  if (a === b && b === c && a === c) {
    return "Equilateral";
  } else if (a === b || b === c || a === c) {
    return "Isosceles";
  } else {
    return "Scalene";
  }
}
console.log(triangleTypeof(1, 3, 3));

console.log("Exercise 15");
const numbers = [4, 12, 7, 2, 15];
let minimum = Infinity;
function lowestNumber() {
  for (number of numbers) {
    if (number < minimum) {
      minimum = number;
      console.log(minimum);
    }
  }
}
lowestNumber();

console.log("Exercise 16");
let maximum = -Infinity;
function highestNumber() {
  for (number of numbers) {
    if (number > maximum) {
      maximum = number;
      console.log(maximum);
    }
  }
}
highestNumber();

console.log("Exercise 17");
function Printvalue(array, index) {
  console.log(numbers.at(1));
}
Printvalue();

console.log("Exercise 18");
function string() {
  let str = numbers.join("");
  console.log(str);
}
string();

console.log("Exercise 19");
function reversenumbers() {
  const x = 32443;
  let result = x.toString().split("").reverse().join("");
  console.log(result);
}
reversenumbers();

console.log("Exercise 20");
function alphabet() {
  x = "webmaster";
  let result = x.toString().split("").sort().join("");
  console.log(result);
}
alphabet();

console.log("Exercise 21");
function findLongestWord(phrase) {
  const words = phrase.split(" ");
  const longestWord = words.reduce((longest, currentWord) => {
    return currentWord.length > longest.length ? currentWord : longest;
  }, "");
  return longestWord;
}

const y = "Web Development Tutorial";
console.log(findLongestWord(y));

console.log("Exercise 22");
function replace() {
  let originaltext = "JavaScript";

  let newtext = originaltext.replaceAll("a", "1");

  console.log(newtext);
}
replace();

console.log("Exercise 23");
function uppercase(str) {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}
const text = "prince of persia";
console.log(uppercase(text));

console.log("Exercise 24");
function beforeven(n) {
  for (let i = 2; i < n; i += 2) {
    console.log(i);
  }
}
beforeven(12);

console.log("Exercise 25");
function numbersbetween(num1, num2) {
  let arr = [];

  for (let i = num1; i <= num2; i++) {
    if (i % 2 == 1) arr.push(i);
  }

  return arr;
}

console.log(numbersbetween(1, 10));

console.log("Exercise 26");
const array = [1, 2, 3, 2, 4, 5, 4, 5];
function repeatvalues() {
  let duplicates = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        if (!duplicates.includes(array[i])) {
          duplicates.push(array[i]);
        }
      }
    }
  }
  console.log(duplicates);
}
repeatvalues();

console.log(" DOM Exercise 27");
