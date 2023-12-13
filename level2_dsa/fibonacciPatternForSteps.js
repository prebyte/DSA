/* Number of ways to reach to a steps flows a fibonacci pattern. */

function fibonacciPatternForSteps (n) {
    if (n < 3) return n;

    let first = 1;
    let second = 2;
    for (let i = 2; i < n; i++) {
        const current = first + second;
        first = second;
        second = current;
    }
    return second;

}

console.log(fibonacciPatternForSteps(5));
