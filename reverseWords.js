/* If you have a string like "I am the good boy". How can you generate
"I ma eht doog yob" ? */

// wrong (need to correct)
function reverseWords (str) {
    let newStr = '';
    for(let i = str.length-1; i>=0; i--){
        newStr += str[i];
    }
    return newStr;
}

console.log(reverseWords("I am the good boy"));

// 2nd way
let str = "I am the good boy";

let newStr = str.split(" ").reverse().join(" ").split("").reverse().join("");

console.log(newStr);
