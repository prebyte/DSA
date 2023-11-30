/* How do get nth fibonacci number ? */

function findFibonacciNumber (n) {
    if (n < 3) return n;
    let preNum = 1, currNum = 1;
    for (let i = 2; i < n; i++) {
        const next = preNum + currNum;
        preNum = currNum;
        currNum = next;
    }
    return currNum;
}

console.log(findFibonacciNumber(6));
