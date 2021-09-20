/**
 * Returns an array of size 'size' from -end through end (-100 through 100) as random int values
 * @param {Number} size
 * @param {Number} end
 */
function randomArray(size, end) {
    let randArr = [];
    while (size >= 0) {
        let rand = Math.floor(Math.random() * end + 1);
        let isRandNeg = Math.floor(Math.random() * 2); // 50/50 chance to convert the rand to a negative int
        if (isRandNeg === 1) rand *= -1;
        randArr.push(rand);
        size -= 1;
    }
    return randArr;
}

let randArr10 = randomArray(10, 100);
for (const num in randArr10) console.log(randArr10[num]);
