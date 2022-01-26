function newHouse(input) {
    const flowerType = input[0];
    const numberOfFlowers = Number(input[1]);
    const budget = Number(input[2]);

    let price = 0;

    if (flowerType === "Roses") {
        price = numberOfFlowers * 5;
        if (numberOfFlowers > 80) {
            price = price - price * 0.10;
        }
    } else if (flowerType === "Dahlias") {
        price = numberOfFlowers * 3.80;
        if (numberOfFlowers > 90) {
            price = price - price * 0.15;
        }
    } else if (flowerType === "Tulips") {
        price = numberOfFlowers * 2.80;
        if (numberOfFlowers > 80) {
            price = price - price * 0.15;
        }
    } else if (flowerType === "Narcissus") {
        price = numberOfFlowers * 3;
        if (numberOfFlowers < 120) {
            price = price + price * 0.15;
        }
    } else if (flowerType === "Gladiolus") {
        price = numberOfFlowers * 2.50;
        if (numberOfFlowers < 80) {
            price = price + price * 0.20;
        }
    }
    const diff = Math.abs(budget - price);

    if (budget >= price) {
        console.log(`Hey, you have a great garden with ${numberOfFlowers} ${flowerType} and ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`);
    }
}