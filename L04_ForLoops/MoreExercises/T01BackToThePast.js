function backToThePast(input) {
    let money = Number(input.shift());
    const year = Number(input.shift());
    let age = 18;

    for (let i = 1800; i <= year; i++) {
        if (i % 2 == 0) {
            money = money - 12000;
        } else {
            money = money - (12000 + (age * 50));
        }

        age++;
    }

    if (money >= 0) {
        console.log(`Yes! He will live a carefree life and will have ${money.toFixed(2)} dollars left.`);
    } else {
        let moneyNeeded = Math.abs(money);
        console.log(`He will need ${moneyNeeded.toFixed(2)} dollars to survive.`);
    }
}