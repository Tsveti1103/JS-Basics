function traveling(input) {
    let index = 0;
    let command = input[index];
    while (command !== "End") {
        let destination = command;
        index++;
        let budget = Number(input[index]);
        let savings = 0;
        while (savings < budget) {
            index++;
            let currentMoney = Number(input[index]);
            savings += currentMoney;
            if (savings >= budget) {
                console.log(`Going to ${destination}!`);
                break;
            }
        }
        index++;
        command = input[index];
        if (command === "End") {
            break;
        }

    }
}
traveling(["France",
    "2000",
    "300",
    "300",
    "200",
    "400",
    "190",
    "258",
    "360",
    "Portugal",
    "1450",
    "400",
    "400",
    "200",
    "300",
    "300",
    "Egypt",
    "1900",
    "1000",
    "280",
    "300",
    "500",
    "End"])

