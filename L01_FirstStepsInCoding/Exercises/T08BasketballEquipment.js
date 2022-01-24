function calculatePrice(input) {
    let pricePerYear = Number(input[0]);

    let shoesPrice = pricePerYear - (pricePerYear * 0.40);
    let jourseyPrice = shoesPrice - (shoesPrice * 0.20);
    let ballPrice = jourseyPrice / 4;
    let accessories = ballPrice / 5;

    let totalCost = (pricePerYear + shoesPrice + jourseyPrice + ballPrice + accessories);

    console.log(totalCost);
}