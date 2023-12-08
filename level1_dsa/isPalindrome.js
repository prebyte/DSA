/* How will you verify a word as palindrome ?
   (If you reverse a word and it becomes same as the previous word, it is called palindrome.) */

function isPalindrome (str) {
    for (let i = 0; i < str.length/2; i++) {
        if (str[i] !== (str[str.length - 1 - i])) return false;
    }
    return true;
}

// 2nd way
function checkPalindrome (str) {
    let str1  = str.split("").reverse().join("");
    return str === str1;
}
console.log(isPalindrome("asdpdsk"));
console.log(checkPalindrome("asdpdsa"));
