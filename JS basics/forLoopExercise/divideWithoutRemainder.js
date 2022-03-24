function divideWithoutRemainder(input) {
    let numbersCount = Number(input[0]);
    let p1Counter = 0;
    let p2Counter = 0;
    let p3Counter = 0;
    for (let i = 1; i <= numbersCount; i++) {
        let num = Number(input[i]);
        if (num % 2 === 0) {
            p1Counter += 1;
        }
        if (num % 3 === 0) {
            p2Counter += 1;
        }
        if (num % 4 === 0) {
            p3Counter += 1;
        }
    }
    let p1 = p1Counter / numbersCount * 100;
    let p2 = p2Counter / numbersCount * 100;
    let p3 = p3Counter / numbersCount * 100;
    console.log(`${(p1).toFixed(2)}%`);
    console.log(`${(p2).toFixed(2)}%`);
    console.log(`${(p3).toFixed(2)}%`);
}
divideWithoutRemainder(["3", "3", "6", "9"])

