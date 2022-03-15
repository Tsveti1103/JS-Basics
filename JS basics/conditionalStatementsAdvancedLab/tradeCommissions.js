function tradeCommissions(input) {
    let town = input[0];
    let sales = Number(input[1]);
    let commission = 0;
    if (sales >= 0 && sales <= 500) {
        switch (town) {
            case "Sofia":
                commission = 0.05 * sales;
                break;
            case "Varna":
                commission = 0.045 * sales;
                break;
            case "Plovdiv":
                commission = 0.055 * sales;
                break;
        }


    }
    else if (sales > 500 && sales <= 1000) {
        switch (town) {
            case "Sofia":
                commission = 0.07 * sales;
                break;
            case "Varna":
                commission = 0.075 * sales;
                break;
            case "Plovdiv":
                commission = 0.08 * sales;
                break;
        }
    }
    else if (sales > 1000 && sales <= 10000) {
        switch (town) {
            case "Sofia":
                commission = 0.08 * sales;
                break;
            case "Varna":
                commission = 0.1 * sales;
                break;
            case "Plovdiv":
                commission = 0.12 * sales;
                break;
        }
    }
    else if (sales > 10000) {
        switch (town) {
            case "Sofia":
                commission = 0.12 * sales;
                break;
            case "Varna":
                commission = 0.13 * sales;
                break;
            case "Plovdiv":
                commission = 0.145 * sales;
                break;
        }
    }
    if (commission === 0) {
        console.log("error");
    }
    else {
        console.log((commission).toFixed(2));
    }
}
tradeCommissions(["Sofia",
    "100"])
