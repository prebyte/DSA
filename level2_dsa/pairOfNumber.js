/* Find all pairs in an array of integers whose sum is equal to a given number. */

function pairOfNumber (arr, n) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === n) {
                newArr.push([arr[i], arr[j]]);
            }
        }
    }
    return newArr;
}

console.log(pairOfNumber([2, 4, 1, 5, 9, 5, 6, 3, 7, 0], 9));
