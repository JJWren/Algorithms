function printSumOfOdds(numStart, numEnd) {
    let sum = 0;
    for (let num = numStart; num <= numEnd; num++) {
        if (num % 2 !== 0) {
            console.log(`${sum} + ${num} = ${sum + num}`);
            sum += num;
        }
    }
}

printSumOfOdds(1, 100000);