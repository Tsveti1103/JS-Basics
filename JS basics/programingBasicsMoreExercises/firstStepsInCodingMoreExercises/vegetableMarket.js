function vegetableMarket(input) {
    let vegetablesSinglePrice = Number(input[0]);
    let fruitsSinglePrice = Number(input[1]);
    let vegetablesAmount = Number(input[2]);
    let fruitsAmount = Number(input[3]);
    let sumInLeva = vegetablesAmount * vegetablesSinglePrice + fruitsAmount * fruitsSinglePrice;
    let sumInEuro = sumInLeva / 1.94;
    console.log(sumInEuro.toFixed(2));
}
vegetableMarket(["0.194","19.4","10","10"]);