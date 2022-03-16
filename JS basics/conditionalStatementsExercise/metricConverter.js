function metricConverter(input) {
    let num = Number(input[0]);
    let fromUnit = input[1];
    let toUnit = input[2];
    let millimeters = 0;
    let result = 0;
    if (fromUnit === "m") {
        millimeters = num * 1000;
    }
    else if (fromUnit === "cm") {
        millimeters = num * 10
    }
    else if (fromUnit === "mm") {
        millimeters = num;
    }
    if (toUnit==="m"){
        result = millimeters/1000;
    }
    else if (toUnit==="cm"){
        result = millimeters/10;
    }
    else if (toUnit==="mm"){
        result = millimeters
    }
    console.log(result.toFixed(3));
}
metricConverter(["45","cm","mm"])