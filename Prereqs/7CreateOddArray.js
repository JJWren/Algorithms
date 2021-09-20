createOddList = (numStart, numEnd) => {
    let oddList = [];
    for (let num = numStart; num <= numEnd; num += 2) {
        if (num % 2 === 0) num++;
        oddList.push(num); // ran in 0.081 seconds
        // oddList[oddList.length] = num; // ran in 0.085 seconds
    }
    return oddList;
};

let someList = createOddList(0, 255);

for (const value in someList) console.log(someList[value]);
