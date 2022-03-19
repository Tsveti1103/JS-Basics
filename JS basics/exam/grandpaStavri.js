function grandpaStavri(input) {
    let daysCount = Number(input[0]);
    let index = 1;
    let totalAmount = 0;
    let totalDegrees = 0;
    for (d = 1; d <= daysCount; d++) {
        let amountOfRaki = Number(input[index]);
        index++;
        let degreesOfRaki = Number(input[index]);
        index++;
        let currentDegrees = degreesOfRaki * amountOfRaki;
        totalAmount += amountOfRaki;
        totalDegrees += currentDegrees;
    }
    let finalDegrees = totalDegrees / totalAmount;
    console.log(`Liter: ${totalAmount.toFixed(2)}`);
    console.log(`Degrees: ${finalDegrees.toFixed(2)}`);
    if (finalDegrees < 38) {
        console.log("Not good, you should baking!");
    }
    else if (finalDegrees >= 38 && finalDegrees <= 42) {
        console.log("Super!");
    }
    else {
        console.log("Dilution with distilled water!");
    }
}
grandpaStavri(["2",
    "200",
    "43",
    "200",
    "40"])

