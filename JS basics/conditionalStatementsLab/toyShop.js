function toyShop(input) {
    let tripPrice = Number(input[0]);
    let puzzlesCount = Number(input[1]);
    let dollsCount = Number(input[2]);
    let teddyBearsCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let trucksCount = Number(input[5]);
    let puzzlesPrice = puzzlesCount * 2.6;
    let dollsPrice = dollsCount * 3;
    let teddyBearsPrice = teddyBearsCount * 4.1;
    let minionsPrice = minionsCount * 8.2;
    let trucksPrice = trucksCount * 2;
    let toysCount = puzzlesCount + dollsCount + teddyBearsCount + minionsCount + trucksCount
    let toysPrice = puzzlesPrice + dollsPrice + teddyBearsPrice + minionsPrice + trucksPrice
    if (toysCount >= 50) {
        toysPrice = 0.75 * toysPrice;
    }
    totalMoney = 0.90 * toysPrice
    if (totalMoney >= tripPrice) {
        let moneyLeft = totalMoney - tripPrice
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
    }
    else {
        let moneyNeeded = tripPrice - totalMoney
        console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`);
    }

}
toyShop(["320", "8", "2", "5", "5", "1"])