function solve(input) {
    let film = input.shift();
    let student = 0;
    let standard = 0;
    let kid = 0;
    let soldTickets = 0;
    let soldTicketsMovie = 0;

    while (film !== "Finish") {
        let freePlaces = Number(input.shift());
        soldTicketsMovie = 0;

        for (let freeSpace = 1; freeSpace <= freePlaces; freeSpace++) {
            let ticketType = input.shift();

            if (ticketType === "End") {
                break;

            } else if (ticketType === "student") {
                student++;
                soldTickets++;
                soldTicketsMovie++;

            } else if (ticketType === "standard") {
                standard++;
                soldTickets++;
                soldTicketsMovie++;

            } else if (ticketType === "kid") {
                kid++;
                soldTickets++;
                soldTicketsMovie++;
            }
        }
        console.log(`${film} - ${(soldTicketsMovie / freePlaces * 100).toFixed(2)}% full.`);
        film = input.shift();
    }

    const studentPercent = 1.0 * student / soldTickets * 100;
    const standardPercent = 1.0 * standard / soldTickets * 100;
    const kidPercent = 1.0 * kid / soldTickets * 100;

    console.log(`Total tickets: ${soldTickets}\n` +
        `${studentPercent.toFixed(2)}% student tickets.\n` +
        `${standardPercent.toFixed(2)}% standard tickets.\n` +
        `${kidPercent.toFixed(2)}% kids tickets.`);
}