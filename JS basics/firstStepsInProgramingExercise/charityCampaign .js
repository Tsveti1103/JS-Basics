function charityCampaign(input) {
    let daysCount = Number(input[0]);
    let confectionersCount = Number(input[1])
    let cakesCount = Number(input[2]);
    let wafflesCount = Number(input[3]);
    let pancakesCount = Number(input[4]);
    let cakePrice = 45;
    let wafflesPrice = 5.80
    let pancakePrice = 3.20
    let totalCakes = cakesCount * confectionersCount * daysCount
    let totalWaffles = wafflesCount * confectionersCount * daysCount
    let totalPancakes = pancakesCount * confectionersCount * daysCount
    let price = totalCakes * cakePrice + totalPancakes * pancakePrice + totalWaffles * wafflesPrice
    let totalPrice = price * 7 / 8
    console.log(totalPrice)

}

charityCampaign(["23", "8", "14", "30", "16"])
