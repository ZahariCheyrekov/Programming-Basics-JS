function solve(input) {
    const n = Number(input[0]);

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;
    let counter = 0;

    for (let i = 1; i <= n; i++) {
        const num = Number(input[i]);
        counter++;

        if (num < 200) {
            p1++;
        } else if (num < 400) {
            p2++;
        } else if (num < 600) {
            p3++;
        } else if (num < 800) {
            p4++;
        } else {
            p5++;
        }
    }

    const p1Percent = 1.0 * p1 / counter * 100;
    const p2Percent = 1.0 * p2 / counter * 100;
    const p3Percent = 1.0 * p3 / counter * 100;
    const p4Percent = 1.0 * p4 / counter * 100;
    const p5Percent = 1.0 * p5 / counter * 100;

    console.log(`${p1Percent.toFixed(2)}%`);
    console.log(`${p2Percent.toFixed(2)}%`);
    console.log(`${p3Percent.toFixed(2)}%`);
    console.log(`${p4Percent.toFixed(2)}%`);
    console.log(`${p5Percent.toFixed(2)}%`);
}