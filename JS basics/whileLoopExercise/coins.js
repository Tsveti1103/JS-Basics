function coins(input) {
    let money = Number(input[0]) * 100;
    let change = parseInt(money);
    let coinsCounter = 0;
    while (change > 0) {
        if (change >= 200) {
            change -= 200;
            coinsCounter++;
        }
        else if (change >= 100) {
            change -= 100;
            coinsCounter++;
        }
        else if (change >= 50) {
            change -= 50;
            coinsCounter++;
        }
        else if (change >= 20) {
            change -= 20;
            coinsCounter++;
        }
        else if (change >= 10) {
            change -= 10;
            coinsCounter++;
        }
        else if (change >= 5) {
            change -= 5;
            coinsCounter++;
        }
        else if (change >= 2) {
            change -= 2;
            coinsCounter++;
        }
        else if (change >= 1) {
            change -= 1;
            coinsCounter++;
        }
    }
    console.log(coinsCounter);
}
coins(["0.56"])