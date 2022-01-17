function flowerShop(input) {
    const mon = Number(input[0]);
    const zum = Number(input[1]);
    const roses = Number(input[2]);
    const cactus = Number(input[3]);
    const priceGift = Number(input[4]);

    const totalSum = mon * 3.25 + zum * 4 + roses * 3.50 + cactus * 8;
    const tax = totalSum / 100 * 5;
    const profit = totalSum - tax;
    const difference = Math.abs(priceGift - profit);

    if (profit < priceGift) {
        const borrowMoney = Math.ceil(difference);
        console.log(`She will have to borrow ${borrowMoney.toFixed(0)} leva.`);
    } else {
        const levaLeft = Math.floor(difference);
        console.log(`She is left with ${levaLeft.toFixed(0)} leva.`);
    }
}