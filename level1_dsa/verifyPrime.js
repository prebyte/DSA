/* Verify a prime number ? */


function verifyPrime (n) {
    let i = 2;

    if (n === 1) return false;
    else if (n === 2) return true;

    while (n > i) {
        if (n % i === 0) {
          return false;
        } else i ++;
    }
    return true;
}

console.log(verifyPrime(13));
