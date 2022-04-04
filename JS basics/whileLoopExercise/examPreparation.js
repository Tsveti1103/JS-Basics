function examPreparation(input) {
    let badGradeCount = Number(input[0]);
    let index = 1;
    let comand = input[index];
    let sumGrades = 0;
    let taskCounter = 0;
    let badGradesCounter = 0;
    while (comand !== "Enough") {
        index++;
        let currentGrade = Number(input[index]);
        index++
        if (currentGrade <= 4) {
            badGradesCounter++;
        }
        if (badGradesCounter === badGradeCount) {
            console.log(`You need a break, ${badGradesCounter} poor grades.`);
            break;
        }
        sumGrades += currentGrade;
        taskCounter++;
        lastTask = comand;
        comand = input[index];
    }
    if (comand === "Enough") {
        console.log(`Average score: ${(sumGrades / taskCounter).toFixed(2)}`);
        console.log(`Number of problems: ${taskCounter}`);
        console.log(`Last problem: ${lastTask}`);
    }
}
examPreparation(["3",
    "Money",
    "6",
    "Story",
    "4",
    "Spring Time",
    "5",
    "Bus",
    "6",
    "Enough"])

