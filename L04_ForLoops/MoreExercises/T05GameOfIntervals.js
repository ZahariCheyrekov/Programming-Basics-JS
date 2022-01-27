function solve(input) {
    const moves = Number(input.shift());
    let result = 0;
    let from0to9 = 0;
    let from10to19 = 0;
    let from20to29 = 0;
    let from30to39 = 0;
    let from40to50 = 0;
    let invalidNumber = 0;

    for (let i = 1; i <= moves; i++) {
        const num = Number(input.shift());

        if (num >= 0 && num <= 9) {
            result += num * 0.20;
            from0to9++;
        } else if (num >= 10 && num <= 19) {
            result += num * 0.30;
            from10to19++;
        } else if (num >= 20 && num <= 29) {
            result += num * 0.40;
            from20to29++;
        } else if (num >= 30 && num <= 39) {
            result += 50;
            from30to39++;
        } else if (num >= 40 && num <= 50) {
            result += 100;
            from40to50++;
        } else {
            result = result / 2;
            invalidNumber += 1;
        }
    }

    const from0to9Percent = 1.0 * from0to9 / moves * 100;
    const from10to19Percent = 1.0 * from10to19 / moves * 100;
    const from20to29Percent = 1.0 * from20to29 / moves * 100;
    const from30to39Percent = 1.0 * from30to39 / moves * 100;
    const from40to50Percent = 1.0 * from40to50 / moves * 100;
    const invalidNUmberPercent = 1.0 * invalidNumber / moves * 100;

    console.log(`${result.toFixed(2)}`);
    console.log(`From 0 to 9: ${from0to9Percent.toFixed(2)}%`);
    console.log(`From 10 to 19: ${from10to19Percent.toFixed(2)}%`);
    console.log(`From 20 to 29: ${from20to29Percent.toFixed(2)}%`);
    console.log(`From 30 to 39: ${from30to39Percent.toFixed(2)}%`);
    console.log(`From 40 to 50: ${from40to50Percent.toFixed(2)}%`);
    console.log(`Invalid numbers: ${invalidNUmberPercent.toFixed(2)}%`);
}