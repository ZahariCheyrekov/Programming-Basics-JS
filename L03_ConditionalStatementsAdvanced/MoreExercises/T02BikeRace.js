function bikeRace(input) {
    const youngBikers = Number(input[0]);
    const olderBikers = Number(input[1]);
    const typeRace = input[2];

    let sum = 0;
    const bikers = youngBikers + olderBikers;

    if (typeRace == "trail") {
        sum = youngBikers * 5.5 + olderBikers * 7;
    } else if (typeRace === "cross-country") {
        sum = youngBikers * 8 + olderBikers * 9.50;
        if (bikers >= 50) {
            sum = sum - sum * 0.25;
        }

    } else if (typeRace === "downhill") {
        sum = youngBikers * 12.25 + olderBikers * 13.75;
    } else if (typeRace === "road") {
        sum = youngBikers * 20 + olderBikers * 21.5;
    }

    const finalSum = sum * 0.95;

    console.log(`${finalSum.toFixed(2)}`);
}