printArray = (list) => {
    for (const i in list) {
        if (i === 0) process.stdout.write(` ${list[i]}, `);
        else if (i < list.length - 1) process.stdout.write(`${list[i]}, `);
        else process.stdout.write(`${list[i]}`);
    }
};

let testArr = "This is an array.".split(" ");

printArray(testArr);
