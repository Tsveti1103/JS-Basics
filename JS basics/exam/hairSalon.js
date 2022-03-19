function hairSalon(input) {
    let wantedIncom = Number(input[0]);
    let index = 1;
    let command = input[index];
    index++;
    let price = 0;
    let totalMoney = 0;
    while (command !== "closed") {
        let serviceType = input[index];
        index++;
        if (command === "haircut") {
            if (serviceType === "mens") {
                price = 15;
            }
            else if (serviceType === "ladies") {
                price = 20;
            }
            else if (serviceType === "kids") {
                price = 10;
            }
            totalMoney += price;
        }
        else if (command === "color") {
            if (serviceType === "touch up") {
                price = 20;
            }
            else if (serviceType === "full color") {
                price = 30;
            }
            totalMoney += price;
        }

        if (totalMoney >= wantedIncom) {
            console.log("You have reached your target for the day!");
            break;
        }
        command = input[index];
        index++;
        if (command === "closed") {
            break;
        }
    }
    if (command === "closed") {
        let neededMoney = wantedIncom - totalMoney;
        console.log(`Target not reached! You need ${neededMoney}lv. more.`);
    }
    console.log(`Earned money: ${totalMoney}lv.`);
}
hairSalon(["300",
    "closed"])


