function solve(input) {
    const firstNumberCeil = Number(input.shift());
    const secondNumberCeil = Number(input.shift());
    const thirdNumberCeil = Number(input.shift());

    for (let i = 2; i <= firstNumberCeil; i += 2) {
        for (let j = 2; j <= secondNumberCeil; j++) {
            for (let k = 2; k <= thirdNumberCeil; k += 2) {
                if (j == 2 || j == 3 || j == 5 || j == 7) {
                    console.log("" + i + " " + j + " " + k);
                }
            }
        }
    }
}