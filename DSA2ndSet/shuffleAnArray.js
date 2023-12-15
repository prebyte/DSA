/* Shuffle an array using Fisher–Yates shuffle algorithm. */

function shuffleArray (arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}

console.log(shuffleArray([4, 2, 1, 3, 6, 5]));
