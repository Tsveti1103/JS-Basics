function trainingLab(input) {
    let w = Number(input[0] * 100);  //дължина
    let h = Number(input[1] * 100); //широчина
    let width = h - 100;
    let widhtPlace = Math.floor(width / 70);
    let lengthPlace = Math.floor(w / 120);
    let placesCount = widhtPlace * lengthPlace - 3;
    console.log(placesCount);
}
trainingLab(["15", "8.9"])