/* Given an array of integers, return an output array such that output [i]
   is equal to the product of all the elements in the array other than itself.
   (without using division) */

function productArrayExcpSelf (arr) {
    let productArr = [], product = 1;
    for (let i = 0; i < arr.length; i++) {
        product = 1;
        for (let j = 0; j < arr.length; j++) {
            if (i !== j) {
                product *= arr[j];
            }
        }
        productArr.push(product);
    }
    return productArr;
}

console.log(productArrayExcpSelf([-3, 0, 1, 5]));
