function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];
    jorneyPrice = 0;
    journeyType = ""
    let destination = ""
    if (budget <= 100) {
        destination = "Bulgaria";
        if (season === "summer") {
            journeyType = "Camp";
            jorneyPrice = 0.3 * budget;
        }
        else if (season === "winter") {
            journeyType = "Hotel";
            jorneyPrice = 0.7 * budget;
        }

    }
    else if (budget <= 1000) {
        destination = "Balkans";
        if (season === "summer") {
            journeyType = "Camp";
            jorneyPrice = 0.4 * budget;
        }
        else if (season === "winter") {
            journeyType = "Hotel";
            jorneyPrice = 0.8 * budget;
        }

    }
    else {
        destination = "Europe";
        journeyType = "Hotel";
        jorneyPrice = 0.9 * budget;
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${journeyType} - ${(jorneyPrice).toFixed(2)}`);
}
journey(["1500", "summer"])