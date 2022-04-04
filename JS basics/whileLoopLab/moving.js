function moving(input) {
    let spaceWidth = Number(input[0]);
    let spaceLength = Number(input[1]);
    let spaceHeight = Number(input[2]);
    let freeSpace = spaceWidth * spaceLength * spaceHeight
    let index = 3;
    let comand = input[index];
    while (comand !== "Done") {
        let boxCount = Number(comand);
        index++;
        freeSpace -= boxCount;
        if (freeSpace <= 0) {
            console.log(`No more free space! You need ${Math.abs(freeSpace)} Cubic meters more.`);
            break;
        }
        comand = input[index];
    }
    if (comand === "Done") {
        console.log(`${freeSpace} Cubic meters left.`);
    }
}
moving(["10",
    "1",
    "2",
    "4",
    "6",
    "Done"])
