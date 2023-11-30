/* Write a function that takes n number as an input and then
builds th sum of all th numbers leading up to that number. */

function sumOfNumbers (n) {
    let result = 0;
    for (let i = 1; i <= n; i++) {
        result += i;
    }
    return result;
}

console.log("fun1", sumOfNumbers(6));

function sum (n) {
    return (n/2) * (n + 1);
}

console.log("fun2", sum(6));
