function goShopping(input) {
    const singleVideoCardPrice = 250;

    const budget = Number(input[0]);
    const videoCardsCount = Number(input[1]);
    const proccessorsCount = Number(input[2]);
    const ramCount = Number(input[3]);

    const videoCardsPrice = videoCardsCount * singleVideoCardPrice;
    const processorsPrice = videoCardsPrice * 0.35;
    const ramPrice = videoCardsPrice * 0.1;

    let totalSum = videoCardsPrice + processorsPrice * proccessorsCount + ramPrice * ramCount;

    if (videoCardsCount > proccessorsCount) {
        totalSum *= 0.85;
    }

    const difference = Math.abs(totalSum - budget).toFixed(2);

    if (totalSum <= budget) {
        console.log(`You have ${difference} leva left!`);
    } else {
        console.log(`Not enough money! You need ${difference} leva more!`);
    }
}