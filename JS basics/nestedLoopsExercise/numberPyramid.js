function numberPyramid(input) {
    let n = Number(input[0]);
    let num = 1;
    let isBigger = false;
    let str = "";
    for (let rows = 1; rows <= n; rows++) {
        for (let cols = 1; cols <= rows; cols++) {
            if (num > n) {
                isBigger = true;
                break;
            }
            str = str + num + " ";
            num++;
        }
        console.log(str);
        str = "";
        if (isBigger) {
            break;
        }
    }
}
numberPyramid(["12"])