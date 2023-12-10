/* Given an array of integers, find the largest product yielded from three of the integers. */

function largestProduct (arr) {
    if (arr.length < 3) return 0;
    let sortedArr = arr.sort((a, b) => b - a);
    if ((sortedArr[0] && sortedArr[1] && sortedArr[2]) !== 0) {
        return sortedArr[0] * sortedArr[1] * sortedArr[2];
    }
    else if ((sortedArr[0] || sortedArr[1]) || sortedArr[2] === 0) {
        return sortedArr[0] + sortedArr[1] + sortedArr[2];
    }
}

console.log(largestProduct([4, 0, 2, 5]));
