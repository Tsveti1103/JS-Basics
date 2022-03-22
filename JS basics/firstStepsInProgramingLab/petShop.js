function food(input){
    let dogsCount = Number(input[0]);
    let otherAnimalsCount = Number(input[1]);
    let dogsFoodPrice = dogsCount * 2.5
    let otherFoodPrice = otherAnimalsCount * 4
    let totalPrice = dogsFoodPrice + otherFoodPrice
    console.log(`${totalPrice} lv.`)
}
food(["13", "9"])