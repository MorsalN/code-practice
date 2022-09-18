let merge = function(arrayOne, arrayTwo) {
  let output = [];

  for (let array of arrayOne) {
    output.push(array);
  }

  for (let array of arrayTwo) {
    output.push(array);
  }

  return output.sort();
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);