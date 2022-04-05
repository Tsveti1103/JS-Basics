function volleyball(input) {
    let year = input[0];
    let holidaysCount = Number(input[1]);
    let weekendsOutSf = Number(input[2]);
    let playWeekendsSf = (48 - weekendsOutSf) * 3 / 4;
    let playDays = playWeekendsSf + weekendsOutSf + 2 / 3 * holidaysCount;
    if (year === "leap") {
        playDays *= 1.15;
    }
    console.log(Math.floor(playDays));
}
volleyball(["normal",
    "11",
    "6"])



