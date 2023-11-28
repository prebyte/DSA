/* How would you remove duplicate members from an array ? */

function removeDuplicate (arr) {
   let unicArray = [];
   for (let i = 0; i < arr.length; i++) {
       if (unicArray.indexOf(arr[i]) === -1) {
           unicArray.push(arr[i]);
           console.log(arr[i]);
       }
   }
   return unicArray;
}

console.log(removeDuplicate([4, 6, 7, 4, 0, 2, 6]));

// 2nd way
function findDuplicate (arr) {
    return [... new Set(arr)];
}

console.log(findDuplicate([4, 6, 7, 4, 0, 2, 6]));
