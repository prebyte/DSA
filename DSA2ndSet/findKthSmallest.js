/* Find k’th smallest element in an array */

function findKthSmallest (arr, k) {
    // arr.sort((a,b) => a-b);
    for (let i = 0; i < arr.length; i++) {
        let temp;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    return arr[k - 1];
}

console.log(findKthSmallest([1, 7, 30, 9, 14], 4));
