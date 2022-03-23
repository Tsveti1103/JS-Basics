function countTheWords(input) {
    let text = input[0];
    let counter = 0;
    for (let i = 0; i < text.length; i++) {
        let simbol = text.charAt(i)
        if (simbol === " ") {
            counter++;
        }
    }
    if (counter >= 10) {
        console.log(`The message is too long to be send! Has ${counter + 1} words.`);
    }
    else {
        console.log("The message was sent successfully!");
    }
}
countTheWords(["This message has ten words and you can send it!"])