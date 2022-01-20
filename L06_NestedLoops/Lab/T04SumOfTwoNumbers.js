function solve(input) {
    let startingNumber = Number(input[0]);
    let finalNumber = Number(input[1]);
    let magicNumber = Number(input[2]);
    let combinations = 0;
    let isFound = false;

    for (let i = startingNumber; i <= finalNumber; i++) {
        for (let j = startingNumber; j <= finalNumber; j++) {
            combinations++;

            if (i + j === magicNumber) {
                console.log(`Combination N:${combinations} (${i} + ${j} = ${magicNumber})`);
                isFound = true;
                break;
            }
        }
        if (isFound) {
            break;
        }
    }

    if (!isFound) {
        console.log(`${combinations} combinations - neither equals ${magicNumber}`);
    }
}