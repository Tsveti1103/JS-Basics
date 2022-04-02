function maxNumber(input) {
    let maxNumber = Number.MIN_SAFE_INTEGER;
    let index = 0;
    let currentData = input[index];
    while (currentData !== "Stop") {
        currentNumber = Number(currentData)
        if (currentNumber > maxNumber) {
            maxNumber = currentNumber;
        }
        index++;
        currentData = input[index];
    }
    console.log(maxNumber);
}
maxNumber(["-10",
    "20",
    "-30",
    "Stop"])

