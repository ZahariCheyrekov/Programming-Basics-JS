function solve(input) {
    const numberDays = Number(input.shift());
    const numberHours = Number(input.shift());
    let totalSum = 0;
    let numberOfDays = 0;

    for (let days = 1; days <= numberDays; days++) {
        let sumForTheDay = 0;
        numberOfDays++;

        for (let hours = 1; hours <= numberHours; hours++) {
            if (days % 2 == 0) {
                if (hours % 2 == 1) {
                    sumForTheDay += 2.50;
                } else {
                    sumForTheDay += 1;
                }

            } else if (days % 2 == 1) {
                if (hours % 2 == 0) {
                    sumForTheDay += 1.25;
                } else {
                    sumForTheDay += 1;
                }
            }
        }

        totalSum += sumForTheDay;
        console.log(`Day: ${numberOfDays} - ${sumForTheDay.toFixed(2)} leva`);
    }
    
    console.log(`Total: ${totalSum.toFixed(2)} leva`);
}