function solve(input) {
    const N = Number(input[0]);

    let printLine = "";
    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= 9; j++) {
            for (let k = 1; k <= 9; k++) {
                for (let l = 1; l <= 9; l++) {
                    if (N % i == 0 && N % j == 0 && N % k == 0 && N % l == 0) {
                        printLine += "" + i + j + k + l + " ";
                    }
                }
            }
        }
    }

    console.log(printLine);
}