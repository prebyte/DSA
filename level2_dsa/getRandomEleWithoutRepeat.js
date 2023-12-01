/* Pic 3 random elements from a list without repeating them using javaScript. */

function getRandomEleWithoutRepeat (arr) {
    let result = [];
    for (let i = 0; i < 3; i++) {
        let randomNum = Math.floor(Math.random() * arr.length);
        if (result.indexOf(arr[randomNum]) === -1) {
            result.push(arr[randomNum]);
        } else i--;
    }
    return result;
}

console.log(getRandomEleWithoutRepeat([2, "a", 0, 5, "p", 3]));
