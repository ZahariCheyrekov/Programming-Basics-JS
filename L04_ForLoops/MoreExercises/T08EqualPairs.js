function solve(input) {
    const n = Number(input.shift());
    let lastSum = 0;
    let diff = 0;

    for (let i = 0; i < n; i++) {
        const num = Number(input.shift());
        const num2 = Number(input.shift());
        const sum = num + num2;

        if (i > 0) {
            diff = Math.abs(lastSum - sum);
        }
        lastSum = sum;
    }

    if (diff == 0) {
        console.log(`Yes, value=${lastSum}`);
    } else {
        console.log(`No, maxdiff=${diff}`);
    }
}