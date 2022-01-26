function fruitShop(input) {
    const fruitName = input[0];
    const dayOfWeek = input[1];
    const amount = Number(input[2]);

    let price = 0;

    let invalid = false;

    if ((dayOfWeek === "Saturday") || (dayOfWeek === "Sunday")) {
        if (fruitName === "banana") {
            price = 2.70;
        } else if (fruitName === "apple") {
            price = 1.25;
        } else if (fruitName === "orange") {
            price = 0.90;
        } else if (fruitName === "grapefruit") {
            price = 1.60;
        } else if (fruitName === "kiwi") {
            price = 3.00;
        } else if (fruitName === "pineapple") {
            price = 5.60;
        } else if (fruitName === "grapes") {
            price = 4.20;
        } else {
            console.log("error");
            invalid = true;
        }

    } else if ((dayOfWeek === "Monday") || (dayOfWeek === "Tuesday") ||
        (dayOfWeek === "Wednesday") || (dayOfWeek === "Thursday") ||
        (dayOfWeek === "Friday")) {

        if (fruitName === "banana") {
            price = 2.50;
        } else if (fruitName === "apple") {
            price = 1.20;
        } else if (fruitName === "orange") {
            price = 0.85;
        } else if (fruitName === "grapefruit") {
            price = 1.45;
        } else if (fruitName === "kiwi") {
            price = 2.70;
        } else if (fruitName === "pineapple") {
            price = 5.50;
        } else if (fruitName === "grapes") {
            price = 3.85;
        } else {
            console.log("error");
            invalid = true;
        }

    } else {
        console.log("error");
        invalid = true;
    }

    if (!invalid) {
        let finalPrice = (price * amount).toFixed(2);
        console.log(`${finalPrice}`);
    }
}