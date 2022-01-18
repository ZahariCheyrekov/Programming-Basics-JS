function go(input) {
    const budget = Number(input[0]);
    const season = input[1];

    let price = 0;
    let typeClass = "";
    let carType = "";

    if (budget <= 100) {
        if (season === "Summer") {
            typeClass = "Economy class";
            carType = "Cabrio";
            price = budget * 0.35;

        } else if (season === "Winter") {
            typeClass = "Economy class";
            carType = "Jeep";
            price = budget * 0.65;
        }

    } else if (budget > 100 && budget <= 500) {
        if (season === "Summer") {
            typeClass = "Compact class";
            carType = "Cabrio";
            price = budget * 0.45;

        } else if (season === "Winter") {
            typeClass = "Compact class";
            carType = "Jeep";
            price = budget * 0.80;
        }

    } else if (budget > 500) {
        if ((season === "Summer") || (season === "Winter")) {
            typeClass = "Luxury class";
            carType = "Jeep";
            price = budget * 0.90;
        }
    }

    console.log(typeClass);
    console.log(`${carType} - ${price.toFixed(2)}`);
}