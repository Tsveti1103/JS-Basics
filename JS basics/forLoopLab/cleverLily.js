function cleverLily(input) {
    let liliAges = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let oneToysPrice = Number(input[2]);
    let birthdayMoney = 0;
    let totalToysPrice = 0;
    let totalBirthdayMoney = 0;
    let brotherMoney = 0;

    for (let i = 1; i <= liliAges; i++) {
        if (i % 2 != 0) {
            totalToysPrice += oneToysPrice
        }
        else {
            birthdayMoney += 10;
            totalBirthdayMoney += birthdayMoney;
            brotherMoney++;

        }
    }
    let totalSum = totalToysPrice + totalBirthdayMoney - brotherMoney;
    if (totalSum >= washingMachinePrice) {
        let moneyLeft = totalSum - washingMachinePrice
        console.log(`Yes! ${(moneyLeft).toFixed(2)}`);
    }
    else {
        let moneyNeeded = washingMachinePrice - totalSum
        console.log(`No! ${(moneyNeeded).toFixed(2)}`);
    }

}
cleverLily(["21", "1570.98", "3"])