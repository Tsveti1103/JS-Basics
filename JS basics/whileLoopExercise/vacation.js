function vacation(input) {
    let neededMoney = Number(input[0]);
    let availableMoney = Number(input[1]);
    let index = 2;
    let comand = input[index];
    let spendDaysCounter = 0;
    let daysCounter = 0;
    while (neededMoney > availableMoney) {
        daysCounter++;
        index++;
        let money = Number(input[index]);
        index++;
        if (comand === "spend") {
            availableMoney -= money;
            spendDaysCounter++;
        }
        if (availableMoney < 0) {
            availableMoney = 0;
        }
        if (comand === "save") {
            availableMoney += money;
            spendDaysCounter = 0;

        }
        if (spendDaysCounter === 5) {
            console.log("You can't save the money.");
            console.log(daysCounter);
            break;
        }
        comand = input[index];
    }
    if (availableMoney >= neededMoney) {
        console.log(`You saved the money for ${daysCounter} days.`);
    }

}
vacation(["2000",
    "1000",
    "spend",
    "1200",
    "save",
    "2000"])

