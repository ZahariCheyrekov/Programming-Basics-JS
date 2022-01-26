function tradeCommissions(input) {
    const town = input[0];
    const salesVolume = Number(input[1]);

    let price = 0;
    let isValid = true;

    if (town === "Sofia") {
        if (salesVolume >= 0 && salesVolume <= 500) {
            price = salesVolume * 0.05;
        } else if (salesVolume > 500 && salesVolume <= 1000) {
            price = salesVolume * 0.07;
        } else if (salesVolume > 1000 && salesVolume <= 10000) {
            price = salesVolume * 0.08;
        } else if (salesVolume > 10000) {
            price = salesVolume * 0.12;
        } else {
            console.log("error");
            isValid = false;
        }

    } else if (town === "Varna") {
        if (salesVolume >= 0 && salesVolume <= 500) {
            price = salesVolume * 0.045;
        } else if (salesVolume > 500 && salesVolume <= 1000) {
            price = salesVolume * 0.075;
        } else if (salesVolume > 1000 && salesVolume <= 10000) {
            price = salesVolume * 0.10;
        } else if (salesVolume > 10000) {
            price = salesVolume * 0.13;
        } else {
            console.log("error");
            isValid = false;
        }

    } else if (town === "Plovdiv") {
        if (salesVolume >= 0 && salesVolume <= 500) {
            price = salesVolume * 0.055;
        } else if (salesVolume > 500 && salesVolume <= 1000) {
            price = salesVolume * 0.08;
        } else if (salesVolume > 1000 && salesVolume <= 10000) {
            price = salesVolume * 0.12;
        } else if (salesVolume >= 10000) {
            price = salesVolume * 0.145;
        } else {
            console.log("error");
            isValid = false;
        }

    } else {
        console.log("error");
        isValid = false;
    }

    if (isValid) {
        console.log(`${price.toFixed(2)}`)
    }
}