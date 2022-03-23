function projects(input) {
    let architectName = input[0];
    let projectsNumber = Number(input[1]);
    let hoursNeeded = projectsNumber * 3

    console.log(`The architect ${architectName} will need ${hoursNeeded} hours to complete ${projectsNumber} project/s.`)
}
projects(["Sanya","9"])

