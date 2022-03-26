function salary(input) {
    let index = 0;
    let openTabs = Number(input[index]);
    index++;
    let money = Number(input[index]);
    index++;
    let positiveSalary = true
    for (let i = 0; i < openTabs; i++) {
        let siteName = input[index];
        index++;
        if (siteName === "Facebook") {
            money -= 150;
        }
        else if (siteName === "Instagram") {
            money -= 100;
        }
        else if (siteName === "Reddit") {
            money -= 50;
        }
        if (money <= 0) {
            console.log("You have lost your salary.");
            positiveSalary = false;
            break;
        }
    }
    if (positiveSalary) {
        console.log(money.toFixed(0));
    }

}
salary(["3",
    "500",
    "Facebook",
    "Stackoverflow.com",
    "softuni.bg"])


