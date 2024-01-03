// Non-overlapping sum of two sets

function findNonOverlappingSum (arr1, arr2) {
    let sum = 0;

    let newSet = new Set();
    for (let i = 0; i < arr1.length; i++) {
        newSet.add(arr1[i]);
        sum += arr1[i];
    }

    for (let i = 0; i < arr1.length; i++) {
        console.log('newSet', newSet);
        if (!newSet.has(arr2[i])) {
            sum += arr2[i];
        }
        else {
            sum -= arr2[i];
        }
    }

    return sum;
}

console.log(findNonOverlappingSum([ 5, 4, 9, 2, 3 ], [ 2, 8, 7, 6, 3 ]));
