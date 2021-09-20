let x = [1, 3, 5, 7, 20];

printAverage = (list) => {
    let sum = 0;
    for (const num in list) sum += list[num];
    let avg = sum / list.length;
    console.log(avg);
};

printAverage(x);
