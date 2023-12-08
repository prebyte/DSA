/* How to empty an array ? */

Array.prototype.clear = function () {
    this.length = 0;
}

let arr = [2, 4, 8, 0, 1];
arr.clear();

console.log(arr);

// 2nd way

let arr2 = [2, 3, 4, "s"]
arr2.splice(0, arr2.length);
console.log(arr2);
