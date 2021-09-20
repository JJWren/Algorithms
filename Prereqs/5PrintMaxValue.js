let x = [-3, 3, 5, 7];
let y = [18, -3, 3, 5, 7];

printMax = (list) => {
    let max = list[0];

    for (const num in list) {
        if (list[num] > max) max = list[num];
    }

    console.log(max);
};

printMax(x);
printMax(y);
