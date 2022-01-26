function flowers(input) {
    const hr = Number(input[0]);
    const roses = Number(input[1]);
    const tulips = Number(input[2]);
    const season = input[3];
    const YorN = input[4];

    let priceAll = 0;
    const numberFlowers = hr + roses + tulips;

    if ((season === "Spring") || (season === "Summer")) {
        const priceHr = hr * 2.00;
        const priceRoses = roses * 4.10;
        const priceTulips = tulips * 2.50;
        priceAll = priceHr + priceRoses + priceTulips;

        if (season === "Spring") {
            if (tulips >= 7) {
                priceAll *= 0.95;
            }
        }

    } else if ((season === "Autumn") || (season === "Winter")) {
        const priceHr = hr * 3.75;
        const priceRoses = roses * 4.50;
        const priceTulips = tulips * 4.15;
        priceAll = priceHr + priceRoses + priceTulips;

        if (season === "Winter") {
            if (roses >= 10) {
                priceAll *= 0.90;
            }
        }
    }

    if (numberFlowers >= 20) {
        priceAll *= 0.80;
    }

    if (YorN === "Y") {
        priceAll = priceAll + priceAll * 0.15;
    }

    const priceWithArranging = priceAll + 2;

    console.log(`${priceWithArranging.toFixed(2)}`);
}