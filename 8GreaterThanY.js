greaterThan = (list, num) => {
    let outputList = [];
    for (const value in list) {
        if (list[value] > num) outputList.push(list[value]);
    }
    return outputList.length;
};

let array = [1, 3, 5, 7];
let y = 3;

console.log(greaterThan(array, y));
