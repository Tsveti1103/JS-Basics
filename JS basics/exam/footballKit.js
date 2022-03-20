function footballKit(input) {
    let tShirtPrice = Number(input[0]);
    let sumForTheBall = Number(input[1]);
    let shortsPrice = 0.75 * tShirtPrice;
    let socksPrice = 0.2 * shortsPrice;
    let buttonsPrice = 2 * (tShirtPrice + shortsPrice);
    let sum = tShirtPrice + shortsPrice + socksPrice + buttonsPrice;
    let totalSum = 0.85 * sum;
    if (totalSum >= sumForTheBall) {
        console.log("Yes, he will earn the world-cup replica ball!");
        console.log(`His sum is ${totalSum.toFixed(2)} lv.`);
    }
    else {
        let neededMoney = sumForTheBall - totalSum;
        console.log("No, he will not earn the world-cup replica ball.");
        console.log(`He needs ${neededMoney.toFixed(2)} lv. more.`);
    }

}
footballKit(["59.99",
    "500"])

