function sumOfTwoNumbers(input) {
    let startNumber = Number(input[0]);
    let endNumber = Number(input[1]);
    let magicNumber = Number(input[2]);
    let counter = 0;
    let isMagic = false;
    for (let first = startNumber; first <= endNumber; first++) {
        for (let second = startNumber; second <= endNumber; second++) {
            counter++;
            if (first + second === magicNumber) {
                console.log(`Combination N:${counter} (${first} + ${second} = ${magicNumber})`);
                isMagic = true;
                break;
            }
        }
        if (isMagic) {
            break;
        }
    }
    if (isMagic === false) {
        console.log(`${counter} combinations - neither equals ${magicNumber}`);
    }
}

sumOfTwoNumbers(["88",
    "888",
    "1000"])




