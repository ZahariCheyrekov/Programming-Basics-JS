function goFishing(input) {
    const budget = Number(input[0]);
    const season = input[1];
    const numberOfFishermen = Number(input[2]);

    let price = 0;

    if (season === "Spring") {
        price = 3000;
        if (numberOfFishermen <= 6) {
            price = price - price * 0.10;
        }
        if (numberOfFishermen >= 7 && numberOfFishermen <= 11) {
            price = price - price * 0.15;
        }
        if (numberOfFishermen >= 12) {
            price = price - price * 0.25;
        }

    } else if (season === "Summer") {
        price = 4200;
        if (numberOfFishermen <= 6) {
            price = price - price * 0.10;
        }
        if (numberOfFishermen >= 7 && numberOfFishermen <= 11) {
            price = price - price * 0.15;
        }
        if (numberOfFishermen >= 12) {
            price = price - price * 0.25;
        }

    } else if (season === "Autumn") {
        price = 4200;
        if (numberOfFishermen <= 6) {
            price = price - price * 0.10;
        }
        if (numberOfFishermen >= 7 && numberOfFishermen <= 11) {
            price = price - price * 0.15;
        }
        if (numberOfFishermen >= 12) {
            price = price - price * 0.25;
        }

    } else if (season === "Winter") {
        price = 2600;
        if (numberOfFishermen <= 6) {
            price = price - price * 0.10;
        }
        if (numberOfFishermen >= 7 && numberOfFishermen <= 11) {
            price = price - price * 0.15;
        }
        if (numberOfFishermen >= 12) {
            price = price - price * 0.25;
        }
    }

    if (season !== "Autumn") {
        if (numberOfFishermen % 2 == 0) {
            price = price - price * 0.05;
        }
    }

    const diff = Math.abs(budget - price);

    if (budget >= price) {
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
    }
}