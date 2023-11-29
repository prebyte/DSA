/* Find the largest and smallest number in an unsorted array of integers. */

function maxMinNum (arr) {
    let maxNum = arr[0];
    let minNum = arr[1];

    if (arr.length < 2) return null;
    if (maxNum < minNum){
        maxNum = arr[1];
        minNum = arr[0];
    }

    for (let i = 2; i < arr.length; i++) {
       if (arr[i] > maxNum) {
           maxNum = arr[i];
       }
       else if (arr[i] < minNum) {
           minNum = arr[i];
       }
    }
    return {maxNum, minNum};
}

console.log(maxMinNum([5, 18, 10, 5, 6, 9, 2]))
