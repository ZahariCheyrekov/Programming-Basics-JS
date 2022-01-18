function matchTickets(input) {
    const budget = Number(input[0]);
    const category = input[1];
    const numberOfPeople = Number(input[2]);
    let price = 0;

    if (numberOfPeople >= 1 && numberOfPeople <= 4) {
        price = budget - budget * 0.75;
    } else if (numberOfPeople >= 5 && numberOfPeople <= 9) {
        price = budget - budget * 0.60;
    } else if (numberOfPeople >= 10 && numberOfPeople <= 24) {
        price = budget - budget * 0.50;
    } else if (numberOfPeople >= 25 && numberOfPeople <= 49) {
        price = budget - budget * 0.40;
    } else if (numberOfPeople >= 50) {
        price = budget - budget * 0.25;
    }
    let ticketPrice = 0;

    if (category === "Normal") {
        ticketPrice = 249.99 * numberOfPeople;
    } else if (category === "VIP") {
        ticketPrice = 499.99 * numberOfPeople;
    }

    const diff = Math.abs(price - ticketPrice);

    if (price >= ticketPrice) {
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
    }
}