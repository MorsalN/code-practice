const packingList = ["bowls", "plates", "pots", "pans", "eating utensils", "glasses", "cups", "cooking utensils"];

console.log("Kitchen stuff to pack:");
for (let i = 0; i < packingList.length; i++) {
  console.log(packingList[i]);
}

console.log(packingList[3]);


// same results but using while loop

let i = 0;
while (i < packingList.length) {
  console.log(packingList[i]);
  i++;
}
