function solve(input) {
    const months = Number(input.shift());
    let electricitySum = 0;

    for (let i = 1; i <= months; i++) {
        const electricity = Number(input.shift());
        electricitySum += electricity;
    }

    const water = 20 * months;
    const internet = months * 15;
    const other = electricitySum + water + internet;
    const otherExpenses = other + (other * 0.20);
    const averageForMonth = (electricitySum + water + internet + otherExpenses) / months;

    console.log(`Electricity: ${electricitySum.toFixed(2)} lv`);
    console.log(`Water: ${water.toFixed(2)} lv`);
    console.log(`Internet: ${internet.toFixed(2)} lv`);
    console.log(`Other: ${otherExpenses.toFixed(2)} lv`);
    console.log(`Average: ${averageForMonth.toFixed(2)} lv`);
}