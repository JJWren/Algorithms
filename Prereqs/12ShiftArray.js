let x = [1, 5, 10, 7, -2];

shiftArrayFwd = (list) => {
    list.shift();
    list.push(0);
    return list;
};

let xShift = shiftArrayFwd(x);

for (const value in xShift) console.log(xShift[value]);
