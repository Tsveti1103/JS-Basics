function sumOfNumbers(input) {
    let n = Number(input[0]);
    let sum = 0;
    let text = input[0];
    let textLength = text.length;
    for (let i = 0; i < textLength; i++) {
        let currentNumber = Number(text[i]);
        sum += currentNumber;
    }
    console.log(`The sum of the digits is:${sum}`);
}
sumOfNumbers(["564891"])