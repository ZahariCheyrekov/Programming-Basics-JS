function vacation(input) {
    const budget = Number(input[0]);
    const season = input[1];

    let place = "";
    let accommodation = "";
    let price = 0;

    if (budget <= 1000) {
        if (season === "Summer") {
            price = budget * 0.65;
            place = "Alaska";
            accommodation = "Camp";

        } else if (season === "Winter") {
            price = budget * 0.45;
            place = "Morocco";
            accommodation = "Camp";
        }

    } else if (budget > 1000 && budget <= 3000) {
        if (season === "Summer") {
            price = budget * 0.80;
            place = "Alaska";
            accommodation = "Hut";

        } else if (season === "Winter") {
            price = budget * 0.60;
            place = "Morocco";
            accommodation = "Hut";
        }

    } else if (budget > 3000) {
        if (season === "Summer") {
            price = budget * 0.90;
            place = "Alaska";
            accommodation = "Hotel";

        } else if (season === "Winter") {
            price = budget * 0.90;
            place = "Morocco";
            accommodation = "Hotel";
        }
    }

    console.log(`${place} - ${accommodation} - ${price.toFixed(2)}`);
}