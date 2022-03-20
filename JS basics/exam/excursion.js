function excursion(input) {
    let peopleCount = Number(input[0]);
    let nightsCount = Number(input[1]);
    let transportCardsCount = Number(input[2]);
    let museumTicketsCount = Number(input[3]);
    let moneyForOne = nightsCount * 20 + transportCardsCount * 1.6 + museumTicketsCount * 6;
    let moneyForAll = moneyForOne * peopleCount;
    let totalMoney = moneyForAll * 1.25
    console.log(totalMoney.toFixed(2));
}
excursion(["131",
    "9",
    "33",
    "46"])

