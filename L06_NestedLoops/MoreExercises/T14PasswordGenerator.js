function solve(input) {
    let n = Number(input.shift());
    let l = Number(input.shift());

    for (let b = 1; b <= n; b++) {
        for (let b2 = 1; b2 <= n; b2++) {
            for (let c1ascii = 97; c1ascii < 97 + l; c1ascii++) {

                let c1 = String.fromCharCode(c1ascii);
                for (let c2ascii = 97; c2ascii < 97 + l; c2ascii++) {

                    let c2 = String.fromCharCode(c2ascii);

                    for (let b3 = Math.max(b, b2) + 1; b3 <= n; b3++) {
                        process.stdout.write(`${b}${b2}${c1}${c2}${b3} `);
                    }
                }
            }
        }
    }

    console.log();
}