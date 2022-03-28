function multiplicationTable() {
    let result = 0;
    for (a = 1; a <= 10; a++) {
        for (b = 1; b <= 10; b++) {
            result = a * b;
            console.log(`${a} * ${b} = ${result}`);
        }
    }
}
multiplicationTable()