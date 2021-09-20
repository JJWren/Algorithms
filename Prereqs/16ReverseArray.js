/**
 * Returns array reversed: [ 0, 1, 2, 3] => [ 3, 2, 1, 0]
 * @param {Array} array
 */
function reverseArray(array) {
    for (let i = 0; i < array.length / 2; i++)
        [array[i], array[array.length - i - 1]] = [
            array[array.length - i - 1],
            array[i],
        ];
    return array;
}

swappedArr = reverseArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
for (let i in swappedArr) console.log(swappedArr[i]);
