/* Find the largest subarray formed by consecutive integers. */

function longestSubarray(input) {
    let i = 1, max = 0, tempLength = 1;

    if (!input.length) return 0;

    while (i < input.length) {
        if (input[i - 1] < input[i]) {
            tempLength++;
        } else {
            if (max < tempLength) max = tempLength;
            tempLength = 1;
        }
        i++;
    }
    if (max < tempLength) max = tempLength;
    return max;
}

console.log(longestSubarray([]));
console.log(longestSubarray([6, 7, 8, 6, 12]));
