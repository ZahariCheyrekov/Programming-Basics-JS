function fuelTank(input) {
    const type = input[0];
    const liters = Number(input[1]);

    const valid = type === "Diesel" || type === "Gasoline" || type === "Gas";

    if (valid) {
        if (liters >= 25) {
            console.log(`You have enough ${type.toLowerCase()}.`);
        } else {
            console.log(`Fill your tank with ` + type.toLowerCase() + `!`);
        }
    } else {
        console.log(`Invalid fuel!`);
    }
}