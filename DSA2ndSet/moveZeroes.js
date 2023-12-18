/* Move all zeros present in an array to the end */

let moveZeroes = function(arr) {
    let temp;

    for (let i = 0; i < arr.length-1; i++) {
        if(arr[i] === 0) {
            temp = arr.splice(i, 1);
            arr.push(temp[0]);
        }
    }
    return arr;
};

console.log(moveZeroes([9, 0, 5, 7, 0, 1, 0]));
