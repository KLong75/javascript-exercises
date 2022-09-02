// write a function to find the average value in an array of numbers
// averageOf([0, 50]) //25

function averageOf(numArray) {
  let total = 0;
  for(let num of numArray) {
    total += num;
  }
  let avg = total / numArray.length;
  return avg;
}