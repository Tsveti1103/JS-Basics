function areaOfFigures(input) {
    let fugiraType = input[0];
    if (fugiraType === "square") {
        let side = Number(input[1]);
        let area = Math.pow(side, 2);
        console.log(area.toFixed(3));
    }
    else if (fugiraType === "rectangle") {
        let firstLength = Number(input[1]);
        let SecondLenght = Number(input[2]);
        let area = firstLength * SecondLenght;
        console.log(area.toFixed(3));
    }
    else if (fugiraType === "circle") {
        let radius = Number(input[1]);
        let area = Math.PI * Math.pow(radius, 2);
        console.log(area.toFixed(3));
    }
    else if (fugiraType === "triangle") {
        let sideLength = Number(input[1]);
        let heightLength = Number(input[2]);
        let area = sideLength * heightLength / 2;
        console.log(area.toFixed(3));
    }
}
areaOfFigures(["triangle","4.5","20"])


