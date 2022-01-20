function solve(input) {
    const n1 = Number(input.shift());
    const n2 = Number(input.shift());

    let printLine = "";
    for (let i = n1; i <= n2; i++) {
        let evenSum = 0;
        let oddSum = 0;
        let currentNumber = "" + i;

        for (let j = 0; j <= currentNumber.length; j++) {
            let currentDigit = Number(currentNumber.charAt(j));

            if (j % 2 == 0) {
                evenSum += currentDigit;
            } else {
                oddSum += currentDigit;
            }
        }

        if (evenSum == oddSum) {
            printLine += `${i} `;
        }
    }

    console.log(printLine);
}