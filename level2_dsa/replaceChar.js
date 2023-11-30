/* Replace every occurrence of a given character in a string with another. */

function replaceChar (str, currChar, newChar) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === currChar) {
            newStr += newChar;
        } else newStr += str[i];
    }
    return newStr;
}

console.log(replaceChar("I have a car", "a", "t"))
