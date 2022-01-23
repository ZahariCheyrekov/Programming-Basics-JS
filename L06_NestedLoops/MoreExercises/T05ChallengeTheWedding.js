function solve(input) {
    const men = Number(input.shift());
    const women = Number(input.shift());
    const freeTables = Number(input.shift());
    let tableCounter = 0;

    let printLine = "";
    for (let m = 1; m <= men; m++) {
        for (let f = 1; f <= women; f++) {
            printLine += `(${m} <-> ${f}) `;
            tableCounter++;

            if (tableCounter == freeTables) {
                console.log(printLine);
                return;
            }
        }
    }

    console.log(printLine);
}