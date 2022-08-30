/* 

Challenge
We will be writing a program that prints the numbers from 100 to 200 to the console, with three exceptions:

If the number is a multiple of 3, print the string "Loopy" instead of the number.
If the number is a multiple of 4, print the string "Lighthouse" instead of the number.
If the number is a multiple of both 3 and 4, print the string "LoopyLighthouse" instead of the number.
By print, we are referring to console.log.

*/


for (let number = 100; number <= 200; number++) {
  if (number % 12 === 0) {
    console.log("LoopyLighthouse");
  } else if (number % 4 === 0) {
    console.log("Lighthouse");
  } else if (number % 3 === 0) {
    console.log("Loopy");
  } else {
    console.log(number);
  }
} 


// another way 
// let x = 100;
// while (x <= 200) {
//   if (x % 3 === 0 && x % 4 === 0){
//     console.log('LoopyLighthouse');
//   } else if (x % 4 === 0) {
//     console.log('Lighthouse');
//   } else if (x % 3 === 0) {
//     console.log('Loopy');
//   } else {
//     console.log(x);   
//   }
//   x = x + 1;
// }