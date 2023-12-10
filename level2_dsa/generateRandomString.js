/* Write a function that generates a random alphanumeric string of a given length. */

function generateRandomString (len, arr) {
    let randomString = '';
    for (let i = len; i > 0; i--) {
        randomString += arr[(Math.floor(Math.random() * arr.length))];
    }
    return randomString;
}

console.log(generateRandomString(20, '12345abcde'));
