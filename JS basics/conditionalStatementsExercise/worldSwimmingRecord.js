function worldSwimmingRecord(input){
    let recordTime = Number(input[0]);
    let distance = Number(input[1]);
    let timeForOneMeters = Number(input[2]);
    let time = distance*timeForOneMeters
    let delay = Math.floor(distance/15) * 12.5
    let totalTime = time + delay
    if (totalTime<recordTime){
        console.log(`Yes, he succeeded! The new world record is ${(totalTime).toFixed(2)} seconds.`);
    }
    else{
        let secondsNeeded =totalTime - recordTime
        console.log(`No, he failed! He was ${(secondsNeeded).toFixed(2)} seconds slower.`);
    }
}
worldSwimmingRecord(["55555.67",
"3017",
"5.03"])

