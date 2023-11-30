/* Given a string with leading and/or trailing whitespace characters,
   return a string with such characters removed. */

function trimStr (str) {
    let firstEnd = 0, lastEnd = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            firstEnd++;
        }
        else if (str[i] !== " ") break;
    }
    for (let j = str.length - 1; j > 0; j--) {
       if (str[j] === " ") {
          lastEnd++;
       }
       else if (str[j] !== " ") break;
    }
    console.log({firstEnd, lastEnd});
    return str.slice(firstEnd, str.length - lastEnd);
}

console.log(trimStr("   I have car  "));
