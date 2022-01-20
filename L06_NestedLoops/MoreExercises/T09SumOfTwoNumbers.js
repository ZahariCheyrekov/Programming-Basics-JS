function solve(input) {
    const startInterval = Number(input.shift());
    const endInterval = Number(input.shift());
    const magicNumber = Number(input.shift());

    let hasFound = false;
    let numberOfCombinations = 0;

    for (let x = startInterval; x <= endInterval; x++) {
        for (let y = startInterval; y <= endInterval; y++) {
            numberOfCombinations++;

            if (y + x == magicNumber) {
                hasFound = true;
                console.log(`Combination N:${numberOfCombinations} (${x} + ${y} = ${magicNumber})`);
                break;
            }
        }

        if (hasFound) {
            break;
        }
    }

    if (!hasFound) {
        console.log(`${numberOfCombinations} combinations - neither equals ${magicNumber}`);
    }
}