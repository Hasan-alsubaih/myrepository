console.log("Exercise 1")
var myName = "hassan";
console.log(myName);

console.log("Exercise 2")
var myAge = 30;
console.log(myAge);

console.log("Exercise 3")
var juliaAge = 32;
var ageDiff = myAge - juliaAge;
console.log(ageDiff);

console.log("Exercise 4")
if (myAge > 21) {
  console.log(" you are older than 21");
} else {
  console.log("you are not older than 21");
}
console.log("Exercise 5")
if (myAge < juliaAge) {
  console.log("julia is older than you");
}
  else if(myAge > juliaAge) {
    console.log("julia is younger than you");
  }
else {
  console.log("you have the same age");
}

console.log("Exercise 6")
const names = ["Hassan", "Dima", "Diogo", "Tom", "Maria", "Jonas", "Raul"];
  console.log(names[0]);
  console.log(names[6]);

for (i = 0; i < names.length; i++) {
  console.log(names[i]);
}
console.log("Exercise 7")
 const studentAges = [30, 18, 33, 32, 29, 27, 38, 34];
i = 0;
while (i <= 7) {
  console.log(studentAges[i]);
  i++;
}
console.log("Exercise 7")
 i = 0;
 while (i <= 7) {
   if (studentAges[i] % 2 == 0)
     console.log(studentAges[i]);
    i++
  }

console.log("Exercise 8")
  sum = 0;
for (i = 0; i < studentAges.length; i++) {
  sum += studentAges[i];
}
console.log(sum);
  
console.log("Exercise 9")
 sum = 0;
 for (i = 0; i <= studentAges.length; i++) {
   if (studentAges[i] % 2 == 0) {
    sum += studentAges[i];
  }
 }
console.log(sum);
 
console.log("Exercise 10")
 sum = 0;
for (i = 1; i < studentAges.length; i++) {
  if (i % 2 == 0) {
    sum +=studentAges[i];
  }
  
}
console.log(sum);

