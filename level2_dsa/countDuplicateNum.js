/* Find all duplicate number in an array with multiple duplicates. */

let countDuplicateNum = function (arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j] && !newArr.includes(arr[i])) {
               newArr.push(arr[i]);
            }
        }
    }
    return newArr;
}

console.log(countDuplicateNum([9, 2, 3, 0, 1, 0, 5, 18, 3]));
