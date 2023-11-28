/* Display prime number up to n. */

function listOfPrimeNumber (n) {
    if (n === 1) return [];
    for (let i = 2; i <= n/2; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

function display (num) {
    const arr = [];
    let start = 2;
    while (start <= num) {
        if (listOfPrimeNumber(start)) {
            arr.push(start);
        }
        start++;
    }
    return arr;
}

console.log(display(19));
