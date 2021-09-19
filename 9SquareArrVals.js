let arr = [1, 5, 10, -2];

sqVals = (list) => {
    let sqList = [];
    for (const i in list) sqList.push(list[i] * list[i]);
    return sqList;
};

let sqList = sqVals(arr);

for (const i in sqList) console.log(sqList[i]);
