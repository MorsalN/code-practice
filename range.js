function range(start, end, step) {
  let output = [];

  if (start > end || step <= 0 || start === undefined || end === undefined || step === undefined) {
    return undefined;
  }

 for (let i = start; start <= end; start += step) {
   output.push(start);
 }

  return output;

}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));