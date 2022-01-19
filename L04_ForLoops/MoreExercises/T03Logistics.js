function solve(input) {
    const numberOfLoads = Number(input.shift());
    let microBuss = 0;
    let truck = 0;
    let train = 0;
    let totalLoadWeight = 0;

    for (let i = 1; i <= numberOfLoads; i++) {
        let loadWeight = Number(input.shift());

        totalLoadWeight += loadWeight;

        if (loadWeight < 4) {
            microBuss += loadWeight;
        } else if (loadWeight < 12) {
            truck += loadWeight;
        } else {
            train += loadWeight;
        }
    }

    const averagePerTon = 1.0 * (microBuss * 200 + truck * 175 + train * 120) / totalLoadWeight;
    const microBussPercent = 1.0 * microBuss / totalLoadWeight * 100;
    const truckPercent = 1.0 * truck / totalLoadWeight * 100;
    const trainPercent = 1.0 * train / totalLoadWeight * 100;

    console.log(`${averagePerTon.toFixed(2)}`);
    console.log(`${microBussPercent.toFixed(2)}%`);
    console.log(`${truckPercent.toFixed(2)}%`);
    console.log(`${trainPercent.toFixed(2)}%`);
}