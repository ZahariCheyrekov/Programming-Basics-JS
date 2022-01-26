function operationBetweenNumbers(input) {
    const n1 = Number(input[0]);
    const n2 = Number(input[1]);
    const operator = input[2];

    let calculation = 0;

    if (operator === "+") {
        calculation = n1 + n2;
        if (calculation % 2 == 0) {
            console.log(`${n1} + ${n2} = ${calculation} - even`);

        } else {
            console.log(`${n1} + ${n2} = ${calculation} - odd`);
        }

    } else if (operator === "-") {
        calculation = n1 - n2;
        if (calculation % 2 == 0) {
            console.log(`${n1} - ${n2} = ${calculation} - even`);

        } else {
            console.log(`${n1} - ${n2} = ${calculation} - odd`);
        }

    } else if (operator === "*") {
        calculation = n1 * n2;
        if (calculation % 2 == 0) {
            console.log(`${n1} * ${n2} = ${calculation} - even`);

        } else {
            console.log(`${n1} * ${n2} = ${calculation} - odd`);
        }

    } else if (operator === "/") {
        if (n2 == 0) {
            console.log(`Cannot divide ${n1} by zero`);
        } else {
            const calculated = 1.0 * n1 / n2;
            console.log(`${n1} / ${n2} = ${calculated.toFixed(2)}`);

        }

    } else if (operator === "%") {
        if (n2 == 0) {
            console.log(`Cannot divide ${n1} by zero`);
        } else {
            calculation = n1 % n2;
            console.log(`${n1} % ${n2} = ${calculation}`);

        }
    }
}