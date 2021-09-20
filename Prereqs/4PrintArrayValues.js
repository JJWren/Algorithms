let x = [1, 3, 5, 7, 9, 13];
let y = [
    "Doll",
    "Big Bird",
    "Green Giant",
    "Azkaban",
    "Pig",
    "Einstein",
    "Boo Boo",
    "Catwoman",
    "Oompa Loompa",
    "Bunny",
    "Ami",
    "String",
    "Bean",
];

printListValues = (list) => {
    for (const value in list) console.log(list[value]);
};

printListValues(x);
printListValues(y);
