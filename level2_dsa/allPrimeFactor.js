/* How could you find all prime factors of a number ? */

const isPrime = (n) => {
    for (let i = 2; i <= n/2; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

const findAllPrimeFactor = num => {
    const result = num % 2 === 0 ? [2] : [];
    let start = 3;
    while (start <= num) {
      if (num % start === 0) {
          if (isPrime(start)) {
              result.push(start);
          }
      }
      start++;
    }
    return result;
}

console.log(findAllPrimeFactor(40));
