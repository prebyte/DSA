/* check if given strings are isomorphic.
   Isomorphic:- Two string "str1" and "str2" are called isomorphic if
   there is one to one mapping possible for every character.
   egg and add are isomorphic but kick and side are not. */

function isIsomorphic (str1, str2) {
    if (str1.length !== str2.length) return false;
    let letterMap = {};
    for (let i = 0; i < str1.length; i++) {
        let letterA = str1[i];
        let letterB = str2[i];
        if (letterMap[letterA] === undefined) {
            letterMap[letterA] = letterB;
        }
        else if (letterMap[letterA] !== letterB) {
            return false;
        }
    }
    return true;
}

console.log(isIsomorphic("egg", "add"));
console.log(isIsomorphic("eek", "adp"));
