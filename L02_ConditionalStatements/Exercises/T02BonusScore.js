function calcScore(input) {
    let startingPoints = Number(input[0]);
    let bonus = 0;

    if (startingPoints <= 100) {
        bonus += 5;
    } else if (startingPoints > 100 && startingPoints <= 1000) {
        bonus += startingPoints * 0.20;
    } else if (startingPoints > 1000) {
        bonus += startingPoints * 0.10;
    }

    if (startingPoints % 2 == 0) {
        bonus += 1;
    } else if (startingPoints % 10 == 5) {
        bonus += 2;
    }

    console.log(bonus);
    console.log(bonus + startingPoints);
}