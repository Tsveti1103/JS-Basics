function godzillaVsKong(input){
    let filmBudget = Number(input[0]);
    let peopleCount = Number(input[1]);
    let oneClothesPrice = Number(input[2]);
    let clothesPrice = peopleCount*oneClothesPrice
    let decorPrice = filmBudget*0.10
    if (peopleCount>150){
        clothesPrice*=0.90
    }
    let totalMoney = clothesPrice+decorPrice
    if(totalMoney<=filmBudget){
        let moneyLeft = (filmBudget-totalMoney).toFixed(2)
        console.log("Action!");
        console.log(`Wingard starts filming with ${moneyLeft} leva left.`);
    }
    else{
        neededMoney = (totalMoney-filmBudget).toFixed(2)
        console.log("Not enough money!");
        console.log(`Wingard needs ${neededMoney} leva more.`);
    }
}
godzillaVsKong(["9587.88",
"222",
"55.68"])


