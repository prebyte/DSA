/* Given an integer, determine if it is a power of 2.
   If so, return that number, else return -1.
   (0 is not a power of 2) */

function isPowerOf2 (n) {
    let powerOf2 = n;
    while (n !== 1) {
        if ((n % 2) !== 0) return -1;
        n = n/2;
    }
    return powerOf2;
}

console.log(isPowerOf2(32));
