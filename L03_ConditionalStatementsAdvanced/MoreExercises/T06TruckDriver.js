function truckDriver(input) {
    const season = input[0];
    const kilometersMonth = Number(input[1]);

    let seasonTime = 4;
    let pay = 0;

    if (kilometersMonth <= 5000) {
        if ((season === "Spring") || (season === "Autumn")) {
            pay = kilometersMonth * 0.75 * seasonTime;
        } else if (season === "Summer") {
            pay = kilometersMonth * 0.90 * seasonTime;
        } else if (season === "Winter") {
            pay = kilometersMonth * 1.05 * seasonTime;
        }

    } else if (kilometersMonth > 5000 && kilometersMonth <= 10_000) {
        if ((season === "Spring") || (season === "Autumn")) {
            pay = kilometersMonth * 0.95 * seasonTime;
        } else if (season === "Summer") {
            pay = kilometersMonth * 1.10 * seasonTime;
        } else if (season === "Winter") {
            pay = kilometersMonth * 1.25 * seasonTime;
        }

    } else if (kilometersMonth > 10_000) {
        pay = kilometersMonth * 1.45 * seasonTime;
    }

    let afterTax = pay - pay * 0.10;

    console.log(`${afterTax.toFixed(2)}`)
}