/* From an unsorted array, check whether there are any two numbers
   that will sum up to a given number ? */

function findTwoNum (arr, sum) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === sum) {
                return true;
            }
        }
    }
    return  false;
}

console.log(findTwoNum([9, 16, 5, 7, 9, 3], 19));
