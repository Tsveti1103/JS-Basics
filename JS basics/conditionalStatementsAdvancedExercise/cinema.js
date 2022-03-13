function cinema(input) {
    let projectionType = input[0];
    let rowsCount = Number(input[1]);
    let columnsCount = Number(input[2]);
    let income = 0
    if (projectionType === "Premiere") {
        income = rowsCount * columnsCount * 12
    }
    else if (projectionType === "Normal") {
        income = rowsCount * columnsCount * 7.5
    }
    else if (projectionType === "Discount") {
        income = rowsCount * columnsCount * 5
    }
    console.log((income).toFixed(2));
}