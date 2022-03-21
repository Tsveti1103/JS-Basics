function fruitMarket(input) {
    let strawberryPrice = Number(input[0]);
    let bananasCount = Number(input[1]);
    let orangesCount = Number(input[2]);
    let raspberriesCount = Number(input[3]);
    let strawberryCount = Number(input[4]);
    let raspberriesPrice = 0.5 * strawberryPrice;
    let orangesPrice = 0.6 * raspberriesPrice;
    let bananasPrice = 0.2 * raspberriesPrice;
    let totalPrice = strawberryPrice * strawberryCount + raspberriesPrice * raspberriesCount + orangesPrice * orangesCount + bananasPrice * bananasCount;
    console.log(totalPrice)
}
fruitMarket(["48","10","3.3","6.5","1.7"])
