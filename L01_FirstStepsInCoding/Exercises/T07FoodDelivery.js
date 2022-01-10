function deliver(input) {
    let chikenMenu = Number(input[0]);
    let fishMenu = Number(input[1]);
    let vegetarianMenu = Number(input[2]);

    let priceChiken = chikenMenu * 10.35;
    let priceFish = fishMenu * 12.40;
    let priceVegetarian = vegetarianMenu * 8.15;

    let totalSumMenus = (priceChiken + priceFish + priceVegetarian);
    let dessertPrice = totalSumMenus * 0.20;

    let finalSum = (totalSumMenus + dessertPrice + 2.50);

    console.log(finalSum);
}