function walking(input) {
    let index = 0;
    let totalSteps = 0;
    while (totalSteps < 10000) {
        let currentSteps = input[index];
        index++;
        if (currentSteps === "Going home") {
            currentSteps = input[index];
            totalSteps += Number(currentSteps);
            break;
        }
        totalSteps += Number(currentSteps);
    }
    if (totalSteps >= 10000) {
        console.log("Goal reached! Good job!");
        console.log(`${totalSteps - 10000} steps over the goal!`);
    }
    else {
        console.log(`${10000 - totalSteps} more steps to reach goal.`);
    }
}
walking(["1000",
    "1500",
    "2000",
    "6500"])




