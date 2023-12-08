/* Write an algorithm that takes an array of numbers as input
   and calculates the sum of those numbers. */

function calculateSum (arr) {
    let sum = 0;
    for (const m of arr) {
      sum += m;
    }
    return sum;
}

console.log(calculateSum([3, 5, 2]));
