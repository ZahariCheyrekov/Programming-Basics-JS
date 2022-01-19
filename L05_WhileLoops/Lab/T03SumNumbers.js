function solve(input) {
    const numberToMatch = Number(input.shift());

    let sum = 0;
    let currentNumber = Number(input.shift());
    while (sum < numberToMatch) {
        sum += currentNumber;
        currentNumber = Number(input.shift());
    }

    console.log(sum);
}