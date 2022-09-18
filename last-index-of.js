function lastIndexOf(array, number) {
  let output = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === number) {
      output = i;
    }
  }
  return output;
}

// OR 
// var lastIndexOf = function(array, value) {
//   var i;
//   for (i = array.length - 1; i >= 0; i--) {
//     if (array[i] === value) {
//       return i;
//     }
//   }
//   return -1; // standard default value for not found indices
// };

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);