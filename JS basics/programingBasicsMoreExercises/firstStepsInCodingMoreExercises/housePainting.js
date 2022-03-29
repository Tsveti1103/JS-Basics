function housePainting(input) {
    let houseHeight = Number(input[0]);
    let siteWallLength = Number(input[1]);
    let roofHeight = Number(input[2]);
    let greenColorArea = ((houseHeight * houseHeight - 2.4) + houseHeight*houseHeight) + (2 * houseHeight * siteWallLength - 2*1.5 * 1.5);
    let redColorArea = 2 * houseHeight * siteWallLength + 2 * (houseHeight * roofHeight/2);
    let greenColor = greenColorArea / 3.4
    let redColor = redColorArea / 4.3

    console.log(greenColor.toFixed(2));
    console.log(redColor.toFixed(2));

}
housePainting(["6", "10", "5.2"])