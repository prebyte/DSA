/* Implement a function to find the factorial of a given number. */

function findFactorial (n) {
    let factorial = 1;
    if(n === 1) return 1;

    for (let i = 2; i <= n; i++)
        factorial = factorial * i;
    return factorial;
}
console.log(findFactorial(4));
