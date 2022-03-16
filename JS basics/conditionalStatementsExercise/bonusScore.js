function bonusScore(input) {
    let num = Number(input[0]);
    let bonusScore = 0
    if (num <= 100) {
        bonusScore += 5;
    }
    else if (num > 1000) {
        bonusScore = num * 0.1;
    }
    else {
        bonusScore = num * 0.2;
    }
    if (num % 2 === 0) {
        bonusScore += 1;
    }
    else if (num % 10 === 5) {
        bonusScore += 2;
    }
    console.log(bonusScore);
    console.log(num + bonusScore);

}
bonusScore(["15875"])