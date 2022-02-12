function solve(input) {
    const startInterval = Number(input.shift());
    const endInterval = Number(input.shift());

    let printLine = "";

    for (let i = startInterval; i <= endInterval; i++) {
        for (let j = startInterval; j <= endInterval; j++) {
            for (let k = startInterval; k <= endInterval; k++) {
                for (let l = startInterval; l < i; l++) {
    
                    if ((j + k) % 2 == 0) {
                    
                        if (i % 2 == 0 && l % 2 == 1 || i % 2 == 1 && l % 2 == 0) {
                            printLine += "" + i + j + k + l + " ";
                        }
                    }
                }
            }
        }
    }

    console.log(printLine);
}
