function cinemaTickets(input) {
    let index = 0;
    let film = input[index];
    let standardCount = 0;
    let kidCount = 0;
    let studentCount = 0;
    let totalTickets = 0;
    while (film !== "Finish") {
        let currentFilmTickets = 0;
        index++;
        let places = Number(input[index]);
        index++;
        let ticketType = input[index];
        while (ticketType !== "End") {
            if (ticketType === "standard") {
                standardCount++;
                currentFilmTickets++;
            }
            else if (ticketType === "kid") {
                kidCount++;
                currentFilmTickets++;
            }
            else if (ticketType === "student") {
                studentCount++;
                currentFilmTickets++;
            }
            index++;
            ticketType = input[index];
            if (currentFilmTickets === places) {
                console.log(`${film} - 100.00% full.`);
                totalTickets += currentFilmTickets;
                break;
            }
            if (ticketType === "End") {
                let percentFull = currentFilmTickets / places * 100;
                console.log(`${film} - ${percentFull.toFixed(2)}% full.`);
                totalTickets += currentFilmTickets;
                index++;
            }
        }
        film = input[index];
        if (film === "Finish") {
            let pecentStudentTickets = studentCount / totalTickets * 100;
            let pecentStandardTickets = standardCount / totalTickets * 100;
            let pecentKidTickets = kidCount / totalTickets * 100;
            console.log(`Total tickets: ${totalTickets}`);
            console.log(`${pecentStudentTickets.toFixed(2)}% student tickets.`);
            console.log(`${pecentStandardTickets.toFixed(2)}% standard tickets.`);
            console.log(`${pecentKidTickets.toFixed(2)}% kids tickets.`);
            break;
        }
    }
}
cinemaTickets
    (["The Matrix",
        "20",
        "student",
        "standard",
        "kid",
        "kid",
        "student",
        "student",
        "standard",
        "student",
        "End",
        "The Green Mile",
        "17",
        "student",
        "standard",
        "standard",
        "student",
        "standard",
        "student",
        "End",
        "Amadeus",
        "3",
        "standard",
        "standard",
        "standard",
        "Finish"])

