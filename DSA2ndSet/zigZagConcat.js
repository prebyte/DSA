/* Print string in the zigzag form in `k` rows */

function zigZagConcat (str, n) {
    if (n <= 1) return str;
    let zigZagArr = new Array(n).fill("");
    let down = false;
    let row = 0;

    for (let i = 0; i < str.length; i++) {
        zigZagArr[row] += str[i];
        console.log("zigZagArr", zigZagArr);

        if (row === n - 1) {
            down = false;
        }
        if (row === 0) {
            down = true;
        }
        if (!down)
            row--;
        else
            row++;
    }
    return zigZagArr;
}

console.log(zigZagConcat("GEEKSFORGEEKS", 3));
