/* Given two strings, return true if they are anagrams of one another.
"Mary" is an anagram of "Army". */

function isAnagram (str1, str2) {

    if (str1.length !== str2.length) return false;
    let x = str1.toLowerCase();
    let y = str2.toLowerCase();
    x = x.split("").sort().join("");
    y = y.split("").sort().join("");

    return x === y;
}

console.log(isAnagram('Army', 'Mary'));
