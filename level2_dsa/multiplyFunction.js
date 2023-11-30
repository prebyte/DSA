/* Write a function that would allow you to do this.
   multiply (5)(6) */

function multiplyFunction (a) {
    return function (b) {
        return a * b;
    }
}

console.log(multiplyFunction(5)(3));
