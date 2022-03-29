function fishland(input) {
    let singleMackerelPrice = Number(input[0]);     //цена на скумрията на килограм
    let singleSpratPrice = Number(input[1]); //цена на цацата на килограм
    let bonitoAmount = Number(input[2]); //паламуд
    let horseMackerelAmount = Number(input[3]); //сафрид
    let musselslAmount = Number(input[4]); //миди
    let singleBonitoPrice = 1.6* singleMackerelPrice;
    let singleHorseMackerelPrice = 1.8 * singleSpratPrice;
    let bonitoPrice = singleBonitoPrice * bonitoAmount;
    let horseMackerelPrice = singleHorseMackerelPrice * horseMackerelAmount;
    let musselsPrice = 7.5 * musselslAmount;
    let totalSum = bonitoPrice + horseMackerelPrice + musselsPrice;
    console.log(totalSum.toFixed(2));
}

fishland(["6.90","4.20","1.5","2.5","1"])