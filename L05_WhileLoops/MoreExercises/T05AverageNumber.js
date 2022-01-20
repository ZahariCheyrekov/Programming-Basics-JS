function solve(input) {
    const n = Number(input.shift());
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        let num = Number(input.shift());
        sum += num;
    }

    console.log(`${(sum / n).toFixed(2)}`);
}