function cake(input) {
    let cakeWidth = Number(input[0]);
    let cakeLength = Number(input[1]);
    let index = 2;
    let comand = input[index];
    let cakeSize = cakeLength * cakeWidth;
    let totalCakePieces = 0;
    while (comand !== "STOP") {
        if (comand !== "STOP") {
            let cakePieces = Number(comand);
            index++;
            totalCakePieces += cakePieces;
        }
        if (totalCakePieces >= cakeSize) {
            let piecesNeeded = totalCakePieces - cakeSize;
            console.log(`No more cake left! You need ${piecesNeeded} pieces more.`);
            break;
        }

        comand = input[index];
    }
    if (comand === "STOP") {
        let piecesLeft = cakeSize - totalCakePieces;
        console.log(`${piecesLeft} pieces are left.`);
    }
}
cake(["10",
"10",
"20",
"20",
"20",
"20",
"21"])


