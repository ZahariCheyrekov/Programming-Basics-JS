function solve(input) {
    let data = input.shift();

    let sumCollected = 0;

    while (data !== "End") {
        let minimalBudget = Number(input.shift());

        while (sumCollected < minimalBudget) {
            const money = Number(input.shift());
            sumCollected += money;
        }

        console.log(`Going to ${data}!`);
        sumCollected = 0;
        data = input.shift();
    }
}