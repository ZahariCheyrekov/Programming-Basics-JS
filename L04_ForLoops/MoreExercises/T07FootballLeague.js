function solve(input) {
    const stadiumCapacity = Number(input.shift());
    const numberOfFans = Number(input.shift());
    let A = 0;
    let B = 0;
    let V = 0;
    let G = 0;

    for (let i = 1; i <= numberOfFans; i++) {
        const fans = input.shift();

        if (fans === "A") {
            A++;
        } else if (fans === "B") {
            B++;
        } else if (fans === "V") {
            V++;
        } else if (fans === "G") {
            G++;
        }
    }

    const fansAPercent = 1.0 * A / numberOfFans * 100;
    const fansBPercent = 1.0 * B / numberOfFans * 100;
    const fansVPercent = 1.0 * V / numberOfFans * 100;
    const fansGPercent = 1.0 * G / numberOfFans * 100;
    const allFans = 1.0 * numberOfFans / stadiumCapacity * 100;

    console.log(`${fansAPercent.toFixed(2)}%`);
    console.log(`${fansBPercent.toFixed(2)}%`);
    console.log(`${fansVPercent.toFixed(2)}%`);
    console.log(`${fansGPercent.toFixed(2)}%`);
    console.log(`${allFans.toFixed(2)}%`);
}