/*  How will you remove duplicate characters from a string ? */

function removeDuplicateChar (str) {
    let arr = str.split('');
    let result = "";
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (newArr.indexOf(arr[i]) === -1) {
            newArr.push(arr[i]);
        }
    }
    return newArr.join('');
}

console.log(removeDuplicateChar('Preety'));
