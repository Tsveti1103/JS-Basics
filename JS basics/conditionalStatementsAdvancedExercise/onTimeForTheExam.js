function onTimeForTheExam(input) {
    let examHour = Number(input[0]);
    let examMinutes = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMinutes = Number(input[3]);
    let examTime = examHour * 60 + examMinutes
    let arrivalTime = arrivalHour * 60 + arrivalMinutes
    if (arrivalTime > examTime) {
        console.log("Late");
        let diff = arrivalTime - examTime;
        let h = Math.floor(diff / 60);
        let m = diff % 60;
        if (diff >= 60) {
            if (m < 10) {
                console.log(`${h}:0${m} hours after the start`);
            }
            else {
                console.log(`${h}:${m} hours after the start`);
            }

        }
        else {
            console.log(`${m} minutes after the start`);
        }
    }
    else if (arrivalTime <= examTime && examTime - arrivalTime <= 30) {
        console.log("On time");
        let diff = examTime - arrivalTime;
        if (arrivalTime != examTime) {
            console.log(`${diff} minutes before the start`);
        }
    }
    else {
        console.log("Early");
        let diff = examTime - arrivalTime
        if (diff < 60) {
            console.log(`${diff} minutes before the start`);
        }
        else {
            let h = Math.floor(diff / 60);
            let m = diff % 60;
            if (m > 9) {
                console.log(`${h}:${m} hours before the start`);
            }
            else {
                console.log(`${h}:0${m} hours before the start`);
            }
        }
    }
}
onTimeForTheExam(["11",
    "30",
    "12",
    "29"])






