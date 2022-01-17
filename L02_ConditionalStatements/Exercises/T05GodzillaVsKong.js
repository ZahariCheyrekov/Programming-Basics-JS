function godzillaVsKong(input) {
    const budget = Number(input[0]);
    const statists = Number(input[1]);
    let priceCostumeStatist = Number(input[2]);

    const decor = budget * 0.1;

    if (statists >= 150) {
        priceCostumeStatist *= 0.90;
    }
    const expenses = decor + statists * priceCostumeStatist;

    let diff = Math.abs(expenses - budget);

    if (expenses > budget) {
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${diff.toFixed(2)} leva more.`);
    } else {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`);
    }
}