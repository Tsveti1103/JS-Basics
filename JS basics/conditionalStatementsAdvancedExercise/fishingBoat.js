function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fishermenCount = Number(input[2]);
    let shipPrice = 0;

    if (season === "Spring") {
        shipPrice = 3000;
    }
    else if (season === "Summer" || season === "Autumn") {
        shipPrice = 4200;
    }
    else if (season === "Winter") {
        shipPrice = 2600
    }
    if (fishermenCount <= 6) {
        shipPrice *= 0.9
    }
    else if (fishermenCount > 6 && fishermenCount <= 11) {
        shipPrice *= 0.85
    }
    else if (fishermenCount >= 12) {
        shipPrice *= 0.75
    }
    if (fishermenCount % 2 === 0 && season != "Autumn") {
        shipPrice *= 0.95
    }
    if (budget >= shipPrice) {
        moneyLeft = (budget - shipPrice).toFixed(2)
        console.log(`Yes! You have ${moneyLeft} leva left.`);
    }
    else {
        neededMoney = (shipPrice - budget).toFixed(2)
        console.log(`Not enough money! You need ${neededMoney} leva.`);
    }

}
fishingBoat(["2000",
"Winter",
"13"])

