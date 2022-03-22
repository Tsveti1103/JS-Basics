function vacationBooksList(input) {
    let pagesCount = Number(input[0]);
    let pagesForHour = Number(input[1]);
    let days = Number(input[2]);
    let totalHour = pagesCount / pagesForHour / days
    console.log(totalHour)


}
vacationBooksList(["212", "20", "2"])
