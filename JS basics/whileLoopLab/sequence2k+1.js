function sequence2k(input) {
    let finalNumber = Number(input[0]);
    let num = 1;
    while (num <= finalNumber) {
        console.log(num);
        num = 2 * num + 1;
    }

}
sequence2k(["31"])