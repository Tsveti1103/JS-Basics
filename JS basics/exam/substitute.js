function substitute(input) {
    let k = Number(input[0]);
    let l = Number(input[1]);
    let m = Number(input[2]);
    let n = Number(input[3]);
    let counter = 0;
    let flag = false;
    for (let ff = k; ff <= 8; ff++) {
        for (let sf = 9; sf >= l; sf--) {
            for (let fs = m; fs <= 8; fs++) {
                for (let ss = 9; ss >= n; ss--) {
                    if (ff % 2 === 0 && fs % 2 === 0 && sf % 2 !== 0 && ss % 2 !== 0) {
                        if (ff !== fs || sf !== ss) {
                            console.log(`${ff}${sf} - ${fs}${ss}`);
                            counter++;
                        }
                        else {
                            console.log("Cannot change the same player.");
                        }
                    }
                    if (counter === 6) {
                        flag = true;
                        break;
                    }
                    if (flag) {
                        break;
                    }
                }
                if (flag) {
                    break;
                }
            }
            if (flag) {
                break;
            }
        }
        if (flag) {
            break;
        }
    }
}
substitute(["6",
    "7",
    "5",
    "6"])

