function calRevenue(input) {
    let priceVeg = Number(input[0]);
    let priceFruits = Number(input[1]);
    let vegetablesKG = Number(input[2]);
    let fruitsKG = Number(input[3]);

    let veggiesPrice = priceVeg * vegetablesKG;
    let fruitsPrice = priceFruits * fruitsKG;

    let totalCost = (veggiesPrice + fruitsPrice) / 1.94;

    console.log(totalCost.toFixed(2));
}