function journey(input) {
    const budget = Number(input[0]);
    const season = input[1];
    let place = "";
    let price = 0;

    if (budget <= 100) {
        console.log(`Somewhere in Bulgaria`);

        if (season === "summer") {
            price = budget * 0.30;
            place = "Camp";
        } else if (season === "winter") {
            price = budget * 0.70;
            place = "Hotel";
        }

    } else if (budget <= 1000) {
        console.log(`Somewhere in Balkans`);

        if (season === "summer") {
            price = budget * 0.40;
            place = "Camp";
        } else if (season === "winter") {
            price = budget * 0.80;
            place = "Hotel";
        }

    } else if (budget > 1000) {
        console.log(`Somewhere in Europe`);

        price = budget * 0.90;
        place = "Hotel";
    }

    console.log(`${place} - ${price.toFixed(2)}`);

}