function equalSumsEvenOddPosition(input) {
    let startNumber = input[0];
    let stopNumber = input[1];
    let final = ""
    for (let i = startNumber; i <= stopNumber; i++) {
        let a = String(i);
        let one = a.charAt(0);
        let two = a.charAt(1);
        let three = a.charAt(2);
        let four = a.charAt(3);
        let five = a.charAt(4);
        let sex = a.charAt(5);
        if (Number(one) + Number(three) + Number(five) === Number(two) + Number(four) + Number(sex)) {
            let currentStr = one + two + three + four + five + sex;
            final += currentStr + " "
        }

    }
    console.log(final);
}
equalSumsEvenOddPosition(["299900",
    "300000"])


