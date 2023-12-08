/* How would you reverse an array elements ? */

function reverseArray () {
    let newArr = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}

const arr = [5, "w", 0, 9, "i"];

console.log(reverseArray(arr));
