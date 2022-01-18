function skiTrip(input) {
    const days = Number(input[0]);
    const roomType = input[1];
    const experience = input[2];
    
    let nights = days - 1;
    let price = 0;

    if (roomType === "room for one person") {
        price = 18 * nights;
    } else if (roomType === "apartment" && days < 10) {
        price = 25 * nights * 0.7;
    } else if (roomType === "apartment" && days >= 10 && days <= 15) {
        price = 25 * nights * 0.65;
    } else if (roomType === "apartment" && days > 15) {
        price = 25 * nights * 0.5;
    } else if (roomType === "president apartment" && days < 10) {
        price = 35 * nights * 0.9;
    } else if (roomType === "president apartment" && days >= 10 && days <= 15) {
        price = 35 * nights * 0.85;
    } else if (roomType === "president apartment" && days > 15) {
        price = 35 * nights * 0.8;
    }

    if (experience === "positive") {
        price += 0.25 * price;
    } else if (experience === "negative") {
        price -= 0.1 * price;
    }

    console.log(price.toFixed(2));
}