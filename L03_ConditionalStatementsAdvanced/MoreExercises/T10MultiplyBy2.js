function multiplay(input) {
    let command = Number(input.shift());
    let sum = 0;

    while (true) {
        if (command < 0) {
            console.log("Negative number!");
            break;
        }

        sum = command * 2;
        console.log(`Result: ${sum.toFixed(2)}`);
        command = input.shift();
    }
}