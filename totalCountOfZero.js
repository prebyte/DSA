/* Count total number of zero from 1 upto n ? */

function totalCountOfZero (n) {
   let count = 0, str = "";
   for (let i = 1; i <= n; i++) {
       str += i;
   }
   for (let j = 0; j < str.length; j++) {
       if (str[j] === "0") {
           count++;
       }
   }
   return count;
}

console.log(totalCountOfZero(100));

// 2nd way

function countZeros (n) {
    let count = 0;
    while (n > 0) {
        count += Math.floor(n/10);
        n = n/10;
    }
    return count;
}

console.log(countZeros(32));
