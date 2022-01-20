function solve(input) {
    const name = input.shift();
    const password = input.shift();

    let command = input.shift();
    while (command !== password) {
        command = input.shift();
    }

    console.log(`Welcome ${name}!`);
}