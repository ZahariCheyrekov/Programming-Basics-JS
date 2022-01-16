function tanktwo(input) {
    let typeOil = input[0];
    let quanOil = Number(input[1]);
    let haveClubCard = input[2];
    let final = 0;

    if (typeOil === 'Gasoline') {
        final = quanOil * 2.22;
        if (haveClubCard === "Yes") {
            final -= quanOil * 0.18;
        }

    } else if (typeOil === 'Diesel') {
        final = quanOil * 2.33;
        if (haveClubCard === "Yes") {
            final -= quanOil * 0.12;
        }

    } else if (typeOil === 'Gas') {
        final = quanOil * 0.93;
        if (haveClubCard === "Yes") {
            final -= quanOil * 0.08;
        }
    }

    if (quanOil > 25) {
        final *= 0.90;
        console.log(`${final.toFixed(2)} lv.`);
    } else if (quanOil >= 20 && quanOil <= 25) {
        final *= 0.92;
        console.log(`${final.toFixed(2)} lv.`);
    } else {
        console.log(`${final.toFixed(2)} lv.`);
    }
}