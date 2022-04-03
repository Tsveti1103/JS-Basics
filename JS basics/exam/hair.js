function hair(input) {
    let target = Number(input[0]);
    let index = 1;
    let command = input[index];
    index++;
    let price = 0;
    let totalPrice = 0;
    while (command !== "closed") {
        let service = input[index];
        index++;
        if (command === "haircut") {
            if (service === "mens") {
                price = 15;
                totalPrice += price;
            }
            else if (service === "ladies") {
                price = 20;
                totalPrice += price;
            }
            else if (service === "kids") {
                price = 10;
                totalPrice += price;
            }
        }
        else if (command === "color") {
            if (service === "touch up") {
                price = 20;
                totalPrice += price;
            }
            else if (service === "full color") {
                price = 30;
                totalPrice += price;
            }
        }
        if (totalPrice >= target) {
            console.log(`You have reached your target for the day!`);
            break;
        }
        command = input[index];
        index++;
        if (command === "closed") {
            let neededMoney = target - totalPrice
            console.log(`Target not reached! You need ${neededMoney}lv. more.`);
            break;
        }
    }
    console.log(`Earned money: ${totalPrice}lv.`);
}
hair(["50",
    "color",
    "full color",
    "haircut",
    "ladies"])

