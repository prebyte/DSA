/* How would you find the largest sum of any two elements ? */

function largestSum (arr) {
    let largestNum = arr[0];
    let secondLargestNum = arr[1];
    if (arr.length < 2) return null;
    if (largestNum < secondLargestNum) {
        largestNum = arr[1];
        secondLargestNum = arr[0];
    }
    for (let i = 2; i < arr.length; i++) {
        if (arr[i] > largestNum) {
            secondLargestNum = largestNum;
            largestNum = arr[i];
        }
        else if (arr[i] > secondLargestNum) {
           secondLargestNum = arr[i];
        }
    }
    return largestNum + secondLargestNum;
}

console.log(largestSum([5, 8, 9, 7, 12, 0, 1]));
