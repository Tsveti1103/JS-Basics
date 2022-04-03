function minNumber(input) {
    let minNumber = Number.MAX_SAFE_INTEGER;
    let index = 0;
    let currentData = input[index];
    while (currentData !== "Stop") {
        currentNumber = Number(currentData)
        if (currentNumber < minNumber) {
            minNumber = currentNumber;
        }
        index++;
        currentData = input[index];
    }
    console.log(minNumber);
}
minNumber(["-10",
    "20",
    "-30",
    "Stop"])

