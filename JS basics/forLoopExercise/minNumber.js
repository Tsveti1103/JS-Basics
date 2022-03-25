function minNumber(input) {
    let minimalNumber = Number.MAX_SAFE_INTEGER
    let numberCount = Number(input[0]);
    for (let i = 1; i <= numberCount; i++) {
        let currentNumber = Number(input[i]);
        if (currentNumber < minimalNumber) {
            minimalNumber = currentNumber;
        }
    }
    console.log(minimalNumber);
}
minNumber(["3",
    "-10",
    "20",
    "-30"])
