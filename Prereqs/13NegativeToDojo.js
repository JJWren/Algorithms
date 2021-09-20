negativeToDojo = (listOfNums) => {
    for (let value in listOfNums)
        if (listOfNums[value] < 0) listOfNums[value] = "Dojo";
    return listOfNums;
};

let noNegs = negativeToDojo([-2, -2, 7, 0, 1, -13, 1000]);

for (let i = 0; i < noNegs.length; i++) console.log(noNegs[i]);
