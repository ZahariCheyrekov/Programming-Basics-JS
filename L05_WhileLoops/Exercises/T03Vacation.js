function solve(input) {
    let moneyNeeded = +input.shift();
    let moneyNow = +input.shift();
    let counterDays = 0;
    let counterSpend = 0;

    while (moneyNow < moneyNeeded && counterSpend < 5) {
        let action = input.shift();
        let amountToAction = +input.shift();

        if (action == "save") {
            moneyNow += amountToAction;
            counterSpend = 0;
        } else if (action == "spend") {
            counterSpend++;
            moneyNow -= amountToAction;
        }
        if (moneyNow < 0) {
            moneyNow = 0;
        }

        counterDays++;
    }
    if (moneyNeeded <= moneyNow) {
        console.log(`You saved the money for ${counterDays} days.`);
    }
    if (counterSpend == 5) {
        console.log("You can't save the money.");
        console.log(counterDays);
    }
}