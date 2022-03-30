function weatherForecastPart2(input) {
    let degrees = Number(input[0]);
    if (degrees >= 5 && degrees < 12) {
        console.log("Cold");
    }
    else if (degrees>12 && degrees<15){
        console.log("Cool");
    }
    else if (degrees>=15 && degrees<=20){
        console.log("Mild");
    }
    else if (degrees>20 && degrees<26){
        console.log("Warm");
    }
    else if (degrees>=26 && degrees<=35){
        console.log("Hot");
    }
    else{
        console.log("unknown");
    }

}
weatherForecastPart2(["0"])