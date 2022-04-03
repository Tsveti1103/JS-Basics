function sumNumbers(input) {
    let finalNumber = Number(input[0]);
    let index = 1;
    let currentNumber = Number(input[index]);
    let sum = 0;
    while (sum < finalNumber) {
        sum += currentNumber;
        index++;
        currentNumber = Number(input[index]);

    }
    console.log(sum);
}
sumNumbers(["20",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6"])

