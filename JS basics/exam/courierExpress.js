function courierExpress(input) {
    let weight = Number(input[0]);
    let deliveryType = input[1];
    let distance = Number(input[2]);
    let deliveryPrice = 0;
    let totalPrice = 0;
    if (weight < 1) {
        deliveryPrice = 0.03;
    }
    else if (weight >= 1 && weight < 10) {
        deliveryPrice = 0.05;
    }
    else if (weight >= 10 && weight < 40) {
        deliveryPrice = 0.1;
    }
    else if (weight >= 40 && weight < 90) {
        deliveryPrice = 0.15;
    }
    else if (weight >= 90 && weight < 150) {
        deliveryPrice = 0.2;
    }
    if (deliveryType === "standard") {
        totalPrice = deliveryPrice * distance;
    }
    else if (deliveryType === "express") {
        if (weight < 1) {
            markup = deliveryPrice * 0.8 * weight;
        }
        else if (weight >= 1 && weight < 10) {
            markup = deliveryPrice * 0.4 * weight;
        }
        else if (weight >= 10 && weight < 40) {
            markup = deliveryPrice * 0.05 * weight;
        }
        else if (weight >= 40 && weight < 90) {
            markup = deliveryPrice * 0.02 * weight;
        }
        else if (weight >= 90 && weight < 150) {
            markup = deliveryPrice * 0.01 * weight;
        }
        totalPrice = (deliveryPrice + markup) * distance;

    }
    console.log(`The delivery of your shipment with weight of ${weight.toFixed(3)} kg. would cost ${totalPrice.toFixed(2)} lv.`);
}
courierExpress(["20", "standard", "349"])

