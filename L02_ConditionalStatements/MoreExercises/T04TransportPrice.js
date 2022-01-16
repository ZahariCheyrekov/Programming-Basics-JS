function transportCost([km, dayNight]) {
    n = Number(km);
    let dayOrNight = dayNight.toLowerCase();
    let taxiDay = 0.70 + n * 0.79;
    let taxiNight = 0.70 + n * 0.90;
    let busPrice = 0.09 * n;
    let trainPrice = 0.06 * n;
    let price = Number;
    if (n < 5001 && n > 1 && n < 20 && dayOrNight === 'day') {
        price = taxiDay;
    } else if (n < 5001 && n > 1 && n < 20 && dayOrNight === 'night') {
        price = taxiNight;
    } else if (n < 5001 && n > 1 && n >= 20 && n < 100) {
        price = busPrice;
    } else if (n < 5001 && n > 1 && n >= 100) {
        price = trainPrice;
    }
    if (n < 5001 && n > 1) {
        console.log(price.toFixed(2));
    }
}