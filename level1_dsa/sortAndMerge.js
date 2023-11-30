/* How would you merge two sorted array ? */

function mergeSortArray (arr1, arr2) {
    for (let i = 0; i < arr2.length; i++) {
        arr1.push(arr2[i]);
    }

    for (let i = 0; i < arr1.length; i++) {
        let temp = 0;
        for (let j = i + 1; j < arr1.length; j++) {
            if (arr1[i] > arr1[j]) {
                temp = arr1[i];
                arr1[i] = arr1[j];
                arr1[j] = temp;
            }
        }
    }

    return arr1;
}

console.log(mergeSortArray([3, 5, 52, 2, 10], [2, 0, 7, 11, 1, 0]));

// 2nd way

function mergeTwoArr (arr1, arr2) {
    let result = [...arr1, ...arr2]; // to combine
    let result2 = result.sort((a, b) => a - b);
    return [... new Set (result2)]; // to remove duplicate
}

console.log(mergeTwoArr([5, 56, 2, 10], [7, 11, 7, 0]));
