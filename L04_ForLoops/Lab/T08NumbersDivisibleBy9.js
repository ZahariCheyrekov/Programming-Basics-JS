function solve(input) {
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);

    let sum = 0;
    let output = "";
    for (i = startNum; i <= endNum; i++) {
        if (i % 9 == 0) {
            sum += i;
            output = output + i + "\n";
        }
    }

    console.log(`The sum: ${sum}`)
    console.log(output);
}