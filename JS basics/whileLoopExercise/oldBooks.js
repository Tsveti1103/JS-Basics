function oldBooks(input) {
    let theBook = input[0];
    let index = 1;
    let booksCounter = 0;
    let book = input[index];
    while (book !== "No More Books") {
        index++;

        if (book === theBook) {
            console.log(`You checked ${booksCounter} books and found it.`);
            break;

        }
        booksCounter++;
        book = input[index];
    }
    if (book === "No More Books") {
        console.log("The book you search is not here!");
        console.log(`You checked ${booksCounter} books.`);
    }
}
oldBooks(["Bourne",
    "True Story",
    "Forever",
    "More Space",
    "The Girl",
    "Spaceship",
    "Strongest",
    "Profit",
    "Tripple",
    "Stella",
    "The Matrix",
    "Bourne"])

