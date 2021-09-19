function printOdds(numStart, numEnd) {
    for (let num = numStart; num <= numEnd; num++) {
        if (num % 2 !== 0)
            console.log(num);
    }
}

printOdds(1, 100000);