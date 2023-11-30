/* How would you find the greatest common divisor of two numbers ? */

function greatestFactor (x, y) {
    for (let i = x<y ? x : y; i > 0; i--) {
        if (x % i === 0 && y % i === 0) {
            return i;
        }
    }
}

console.log(greatestFactor(6, 100));
