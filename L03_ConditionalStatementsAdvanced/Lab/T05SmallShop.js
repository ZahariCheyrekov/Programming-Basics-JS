function smallShop(input) {
    const product = input[0];
    const town = input[1];
    const amount = Number(input[2]);
    let price = 0;

    if (town === "Sofia") {
        if (product === "coffee") {
            price = amount * 0.50;
        } else if (product === "water") {
            price = amount * 0.80;
        } else if (product === "beer") {
            price = amount * 1.20;
        } else if (product === "sweets") {
            price = amount * 1.45;
        } else if (product === "peanuts") {
            price = amount * 1.60;
        }

    } else if (town === "Plovdiv") {
        if (product === "coffee") {
            price = amount * 0.40;
        } else if (product === "water") {
            price = amount * 0.70;
        } else if (product === "beer") {
            price = amount * 1.15;
        } else if (product === "sweets") {
            price = amount * 1.30;
        } else if (product === "peanuts") {
            price = amount * 1.50;
        }

    } else if (town === "Varna") {
        if (product === "coffee") {
            price = amount * 0.45;
        } else if (product === "water") {
            price = amount * 0.70;
        } else if (product === "beer") {
            price = amount * 1.10;
        } else if (product === "sweets") {
            price = amount * 1.35;
        } else if (product === "peanuts") {
            price = amount * 1.55;
        }
    }

    console.log(price);
}