/* In an integer array, there is 1 to 100 numbers, out of one is duplicate, how to find ? */

function findDuplicateNum (arr) {
    let rightSum = 0, wrongSum = 0;
    for (let i = 1; i <= 10; i++) {
        rightSum += i;
    }

    for (let j = 0; j < arr.length; j++) {
        wrongSum += arr[j];
    }
    return wrongSum - rightSum;
}

console.log(findDuplicateNum([1, 2, 3, 4, 5, 7, 6, 7, 8, 9, 10]));

// 2nd way

function findDuplicate (arr) {
    let n = arr.length - 1;
    let expectedSum = n * (n + 1)/2;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum - expectedSum;
}

console.log(findDuplicate([1, 2, 3, 4, 5, 9, 6, 7, 8, 9, 10]));
