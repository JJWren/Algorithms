let arr = [1, 5, 10, -2];

sqVals = (list) => {
    let noNegList = [];
    for (const i in list)
        if (list[i] < 0) noNegList.push(0);
        else noNegList.push(list[i]);
    return noNegList;
};

let noNegList = sqVals(arr);

for (const i in noNegList) console.log(noNegList[i]);
