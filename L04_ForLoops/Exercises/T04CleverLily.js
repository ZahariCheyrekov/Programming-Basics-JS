function solve(input) {
    const age = Number(input[0]);
    const washerPrice = Number(input[1]);
    const pricePerToy = Number(input[2]);

    let sum = 0;
    let toyCount = 0;
    let moneyCount = 0;
    let moneyPerBd = 10;

    for (let i = 1; i <= age; i++) {
        if (i % 2 == 0) {
            moneyCount += moneyPerBd;
            moneyCount--;
            moneyPerBd += 10;
        } else {
            toyCount++;
        }
    }
    
    sum = toyCount * pricePerToy + moneyCount;

    if (sum >= washerPrice) {
        console.log(`Yes! ${(sum - washerPrice).toFixed(2)}`);
    } else
        console.log(`No! ${(washerPrice - sum).toFixed(2)}`);
}