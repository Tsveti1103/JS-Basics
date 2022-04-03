function graduationPt2(input) {
    let studentName = input[0];
    let failCounter = 0;
    let clasCounter = 1;
    let sum = 0;
    let index = 1;
    while (clasCounter <= 12) {
        let currentGrades = Number(input[index]);
        index++;
        if (currentGrades < 4) {
            failCounter++;
            if (failCounter > 1) {
                console.log(`${studentName} has been excluded at ${clasCounter} grade`);
            }
        }
        else if (currentGrades >= 4) {
            clasCounter++;
            sum += currentGrades;
        }
    }
    console.log(`${studentName} graduated. Average grade: ${(sum / 12).toFixed(2)}`);
}
graduationPt2(["Mimi",
    "5",
    "6",
    "5",
    "6",
    "5",
    "6",
    "6",
    "2",
    "3"])

