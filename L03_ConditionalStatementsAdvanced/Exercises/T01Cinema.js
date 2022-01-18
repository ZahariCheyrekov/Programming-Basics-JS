function cinema(input) {
    const projectionType = input[0];
    const rows = Number(input[1]);
    const columns = Number(input[2]);
    let sum = 0;

    if (projectionType === "Premiere") {
        sum = rows * columns * 12.00;
    } else if (projectionType === "Normal") {
        sum = rows * columns * 7.50;
    } else if (projectionType === "Discount") {
        sum = rows * columns * 5.00;
    }
    console.log(`${sum.toFixed(2)} leva`);
}