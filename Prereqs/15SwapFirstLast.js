/**
 * Returns array with the first and last values swapped
 * @param {Array} array
 */
function swapFirstLast(array) {
    let first = array[0],
        last = array[array.length - 1];
    [array[0], array[array.length - 1]] = [last, first];
    return array;
}

let swappedArr = swapFirstLast([32, 27, 0, -59]);
for (const num in swappedArr) console.log(swappedArr[num]);
