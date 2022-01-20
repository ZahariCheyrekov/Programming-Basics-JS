function solve(input) {
    const startPosition1 = Number(input.shift());
    const startPosition2 = Number(input.shift());
    const startPositionDiff1 = Number(input.shift());
    const startPositionDiff2 = Number(input.shift());

    const endPosition1 = startPosition1 + startPositionDiff1;
    const endPosition2 = startPosition2 + startPositionDiff2;

    for (let a = startPosition1; a <= endPosition1; a++) {
        for (let b = startPosition2; b <= endPosition2; b++) {
            if (a % 2 != 0 && a % 3 != 0 && a % 5 != 0 && a % 7 != 0) {
                if (b % 2 != 0 && b % 3 != 0 && b % 5 != 0 && b % 7 != 0) {
                    console.log(`${a}${b}`);
                }
            }
        }
    }
}