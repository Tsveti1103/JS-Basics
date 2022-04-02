function accountBalance(input) {
    let balance = 0;
    let index = 0;
    let deposit = input[index];
    while (deposit !== "NoMoreMoney") {
        let amount = Number(deposit);
        if (amount < 0) {
            console.log("Invalid operation!");
            break;
        }
        balance += amount;
        console.log(`Increase: ${(amount).toFixed(2)}`);
        index++;
        deposit = input[index];
    }
    console.log(`Total: ${(balance).toFixed(2)}`);
}
accountBalance(["120",
"45.55",
"-150"])

