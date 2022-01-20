function solve(input) {
    let floors = Number(input[0]);
    let rooms = Number(input[1]);

    for (let i = floors; i >= 1; i--) {
        let printLine = "";

        for (let j = 0; j < rooms; j++) {

            if (i % 2 == 0 && i != floors) {
                printLine += `O${i}${j} `;

            } else if (i % 2 == 1 && i != floors) {
                printLine += `A${i}${j} `;
            }

            if (i == floors) {
                printLine += `L${i}${j} `;
            }
        }

        console.log(printLine);
    }
}