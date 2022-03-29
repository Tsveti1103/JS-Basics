function tournamentOfChristmas(input) {
    let index = 0;
    let daysCount = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let moneyForADay = 0;
    let daysWining = 0;
    let winCounter = 0;
    let loseCounter = 0;
    let daysLosing = 0;
    let totalMoney = 0;
    for (let d = 1; d <= daysCount; d++) {
        while (command !== "Finish") {
            let result = input[index];
            index++;
            if (result === "win") {
                moneyForADay += 20;
                winCounter++;
            }
            else if (result === "lose") {
                loseCounter++;
            }
            command = input[index];
            index++;
            if (command === "Finish") {
                if (winCounter > loseCounter) {
                    moneyForADay *= 1.10;
                    daysWining++;
                    winCounter = 0;
                    loseCounter = 0;
                    totalMoney += moneyForADay;
                    moneyForADay = 0;
                }
                else {
                    daysLosing++;
                    winCounter = 0;
                    loseCounter = 0;
                    totalMoney += moneyForADay;
                    moneyForADay = 0;
                }
            }
        }
        command = input[index];
        index++;
        if (d === daysCount) {
            if (daysWining > daysLosing) {
                totalMoney *= 1.20;
                console.log(`You won the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
                break;
            }
            else {
                console.log(`You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
                break;
            }
        }
    }
}
tournamentOfChristmas([
    "3",
    "darts",
    "lose",
    "handball",
    "lose",
    "judo",
    "win",
    "Finish",
    "snooker",
    "lose",
    "swimming",
    "lose",
    "squash",
    "lose",
    "table tennis",
    "win",
    "Finish",
    "volleyball",
    "win",
    "basketball",
    "win",
    "Finish"
])

