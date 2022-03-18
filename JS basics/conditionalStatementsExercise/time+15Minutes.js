function time15Minutes(input){
    let hour = Number(input[0]);
    let minutes = Number(input[1]);
    let timeInMinutes = hour*60 + minutes+15
    let totalHour = Math.floor(timeInMinutes/60);
    let totalMinutes = timeInMinutes%60;
    if (totalHour>23){
        totalHour=totalHour-24
    }
    if (totalMinutes<10){
        console.log(`${totalHour}:0${totalMinutes}`);
    }
    else{
        console.log(`${totalHour}:${totalMinutes}`);
    }
}
time15Minutes(["23", "59"])