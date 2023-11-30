/* Return an array showing the cumulative sum at each index of an array of integers. */

function cumulativeSum (arr) {
    let sum = 0;
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        newArr.push(sum);
    }
    return newArr;
}

console.log(cumulativeSum([2, 4, 6, 0, 16, 13, 3, 4]));
