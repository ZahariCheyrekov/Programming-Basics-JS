function solve(input) {
    let requiredSum = Number(input.shift());

    let expectedSum = 0;
    let counter = 1;
    let cardTransactionSum = 0;
    let cashTransactionSum = 0;
    let cardCount = 0;
    let cashCount = 0;

    while (true) {
        let command = input.shift();
        if (command === 'End') {
            break;
        }

        if (counter % 2 === 0) {
            if (command < 10) {
                console.log('Error in transaction!');
            } else {
                console.log('Product sold!');
                cardTransactionSum += Number(command);
                expectedSum += Number(command);
                cardCount++;
            }
        } else {
            if (command > 100) {
                console.log('Error in transaction!');
            } else {
                console.log('Product sold!');
                cashTransactionSum += Number(command);
                expectedSum += Number(command);
                cashCount++;
            }
        }

        if (expectedSum >= requiredSum) {
            break;
        }
        counter++;
    }
    if (expectedSum >= requiredSum) {
        let avrCash = cashTransactionSum / cashCount;
        let avrCard = cardTransactionSum / cardCount;
        console.log(`Average CS: ${avrCash.toFixed(2)}`);
        console.log(`Average CC: ${avrCard.toFixed(2)}`);
    } else {
        console.log('Failed to collect required money for charity.');
    }
}