/* Write a function to find the longest common prefix string amongst an array of strings.
   If there is no common prefix, return an empty string " ".*/

let largestCommonPrefix =  function (arrayOfStr) {
    let prefix = "";
    if (arrayOfStr.length === 0) return prefix;
    for (let i = 0; i < arrayOfStr[0].length; i++) {
        let char = arrayOfStr[0][i];
        for (let j = 0; j < arrayOfStr.length; j++) {
            if (arrayOfStr[j][i] !== char) return prefix;
        }
        prefix = prefix + char;
    }
    return prefix;
}

console.log(largestCommonPrefix(["apple", "atp", "aple"]));
