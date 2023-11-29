/* Given a string of two or more words, capitalize the first letter of each word.
Each word is separated by a space. */

function capitalizeWords (str) {
    let newStr = "";
    newStr += str[0].toUpperCase();

    for (let i = 1; i < str.length; i++) {
        if (str[i] === " ") {
            newStr += str[i];
            newStr += str[i + 1].toUpperCase();
            i++;
        } else newStr += str[i];
    }
    return newStr;
}

console.log(capitalizeWords("i have A pen"));
