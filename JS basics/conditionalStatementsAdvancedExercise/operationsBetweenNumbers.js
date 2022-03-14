function operationsBetweenNumbers(input) {
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let operator = input[2];
    let result = 0;
    if (operator === "+") {
        result = n1 + n2;
        if (result % 2 === 0) {
            evenOdd = "even"
        }
        else {
            evenOdd = "odd"
        }
        console.log(`${n1} ${operator} ${n2} = ${result} - ${evenOdd}`);

    }
    else if (operator === "-") {
        result = n1 - n2;
        if (result % 2 === 0) {
            evenOdd = "even"
        }
        else {
            evenOdd = "odd"
        }
        console.log(`${n1} ${operator} ${n2} = ${result} - ${evenOdd}`);

    }
    else if (operator === "*") {
        result = n1 * n2;
        if (result % 2 === 0) {
            evenOdd = "even"
        }
        else {
            evenOdd = "odd"
        }
        console.log(`${n1} ${operator} ${n2} = ${result} - ${evenOdd}`);

    }
    else if (operator === "/") {
        if (n2 != 0) {
            result = (n1 / n2).toFixed(2);
            console.log(`${n1} / ${n2} = ${result}`);
        }
        else {
            console.log(`Cannot divide ${n1} by zero`);
        }
    }
    else if (operator === "%") {
        if (n2 != 0) {
            result = (n1 % n2);
            console.log(`${n1} % ${n2} = ${result}`);
        }
        else {
            console.log(`Cannot divide ${n1} by zero`);
        }
    }

}
operationsBetweenNumbers(["112",
"0",
"/"])







