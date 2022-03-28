function building(input) {
    let flors = Number(input[0]);
    let rooms = Number(input[1]);
    let roomType = ""
    let str = ""
    for (let f = flors; f >= 1; f--) {
        for (let r = 0; r < rooms; r++) {

            if (f % 2 != 0) {
                roomType = "A";
            }
            else {
                roomType = "O";
            }
            if (f === flors) {
                roomType = "L"
            }
            str = str + roomType + f + r + " "
        }
        console.log(str);
        str = ""
    }
}
building(["9", "5"])