function histogram(input) {
    let numbersCount = Number(input[0]);
    let p1Counter = 0;
    let p2Counter = 0;
    let p3Counter = 0;
    let p4Counter = 0;
    let p5Counter = 0;
    for (let i = 1; i <= numbersCount; i++) {
        let num = Number(input[i]);
        if (num < 200) {
            p1Counter += 1;
        }
        else if (num >= 200 && num < 400) {
            p2Counter += 1;
        }
        else if (num >= 400 && num < 600) {
            p3Counter += 1;
        }
        else if (num >= 600 && num < 800) {
            p4Counter += 1;
        }
        else {
            p5Counter += 1;
        }
    }
    let p1=(p1Counter/numbersCount*100).toFixed(2);
    let p2=(p2Counter/numbersCount*100).toFixed(2);
    let p3=(p3Counter/numbersCount*100).toFixed(2);
    let p4=(p4Counter/numbersCount*100).toFixed(2);
    let p5=(p5Counter/numbersCount*100).toFixed(2);
    console.log(`${p1}%`);
    console.log(`${p2}%`);
    console.log(`${p3}%`);
    console.log(`${p4}%`);
    console.log(`${p5}%`);
}
histogram(["14","53","7","56","180","450","920","12","7","150","250","680","2","600","200"])




