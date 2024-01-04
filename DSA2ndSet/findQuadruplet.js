// 4–Sum Problem | Quadruplets with a given sum

function findQuadruplet (arr, sum) {
    let i, j, k, l;
    let n = arr.length;
    let newArr = [];

    for(i = 0; i < n - 3; i++) {

        for(j = i + 1; j < n - 2; j++) {

            for(k = j + 1; k < n - 1; k++) {

                for(l = k + 1; l < n; l++) {

                    if (arr[i] + arr[j] + arr[k] + arr[l] === sum) {
                        newArr.push([arr[i], arr[j], arr[k], arr[l]]);
                    }
                }
            }
        }
    }

    return newArr;
}

console.log(findQuadruplet([ 4, 5, 3, 1, 2, 4 ], 13));
