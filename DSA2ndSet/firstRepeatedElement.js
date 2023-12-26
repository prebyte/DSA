/* Find the first repeating element in an array of integers */

function firstRepeatedElement (arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                return arr[i];
            }
        }
    }
    return -1;
}

console.log(firstRepeatedElement([10, 5, 3, 4, 3, 5, 6]));
