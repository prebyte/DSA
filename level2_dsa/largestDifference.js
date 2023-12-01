/* Given an array of integers, find the largest difference between two elements
   such that the element of lesser value must come before the greater element. */

function largestDifference (arr) {
    if (arr.length < 2) return null;
    let index = 0, max = arr[0], min = arr[0];
    for (let i = 1; i < arr.length; i++) {
       if (arr[i] > max) {
           max = arr[i];
           index = i;
       }
       for (let j = 1; j < index; j++) {
           if (arr[j] < min) {
             min = arr[j];
           }
       }
    }
    console.log(max, min);
    return max - min;
}

console.log(largestDifference([15, 5, 9, 25, 4, 3, 10, 2]));
