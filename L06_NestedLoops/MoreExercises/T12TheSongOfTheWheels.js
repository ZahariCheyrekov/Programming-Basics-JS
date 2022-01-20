function solve(input) {
    let m = Number(input.shift())
    let ctr = 0;
    let output = "";
    let allPass = "";

    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= 9; j++) {
            for (let k = 1; k <= 9; k++) {
                for (let l = 1; l < 9; l++) {
                    if (i < j && k > l) {
                        let calculation = i * j + k * l;
                        if (calculation == m) {
                            allPass += `${i}${j}${k}${l} `;
                            ctr++;
                            if (ctr == 4) {
                                output = `${i}${j}${k}${l}`;
                            }
                        }
                    }
                }
            }
        }
    }
    
    if (allPass != "" && output != "") {
        console.log(`${allPass}`);
        console.log(`Password: ${output}`);
    } else if (allPass != "" && output == "") {
        console.log(`${allPass}`);
        console.log(`No!`);
    } else {
        console.log(`No!`);
    }
}