let arr = [1, 5, 10, -2];

maxMinAvg = (list) => {
    let max = list[0],
        min = list[0],
        sum = 0;

    for (const i in list) {
        sum += list[i];
        switch (true) {
            case list[i] > max:
                max = list[i];
                break;
            case list[i] < min:
                min = list[i];
                break;
        }
    }
    let avg = sum / list.length;
    console.log(`\n\tMin: ${min}\n\tMax: ${max}\n\tAvg: ${avg}`);
};

maxMinAvg(arr);
