function newHouse(input) {
    let flowersType = input[0];
    let flowersCount = Number(input[1]);
    let budget = Number(input[2]);
    let flowersPrice = 0;
    switch (flowersType) {
        case "Roses":
            flowersPrice = flowersCount * 5;
            if (flowersCount > 80) {
                flowersPrice *= 0.9;
            }
            break;
        case "Dahlias":
            flowersPrice = flowersCount * 3.8
            if (flowersCount > 90) {
                flowersPrice *= 0.85;
            }
            break;
        case "Tulips":
            flowersPrice = flowersCount * 2.8
            if (flowersCount > 80) {
                flowersPrice *= 0.85;
            }
            break;
        case "Narcissus":
            flowersPrice = flowersCount * 3
            if (flowersCount < 120) {
                flowersPrice *= 1.15;
            }
            break;
        case "Gladiolus":
            flowersPrice = flowersCount * 2.5
            if (flowersCount < 80) {
                flowersPrice *= 1.20;
            }
            break;

    }
    if (budget >= flowersPrice) {
        monetLeft = (budget - flowersPrice).toFixed(2)
        console.log(`Hey, you have a great garden with ${flowersCount} ${flowersType} and ${monetLeft} leva left.`);
    }
    else {
        neededMoney = (flowersPrice - budget).toFixed(2)
        console.log(`Not enough money, you need ${neededMoney} leva more.`);
    }

}
newHouse(["Narcissus",
"119",
"360"])
