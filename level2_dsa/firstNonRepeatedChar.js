/* How could you find the first non repeating char in a string ? */

function firstNonRepeatedChar (str) {
    let len = str.length, char, charCount = {};

    for(let i = 0; i < len; i++){
        char = str[i];
        if(charCount[char]){
            charCount[char]++;
        }
        else
            charCount[char] = 1;
    }
    for (let j in charCount){
        console.log(charCount);
        if (charCount[j] === 1)
            return j;
    }
}

console.log(firstNonRepeatedChar("hi I am an Indian honest girl"));
