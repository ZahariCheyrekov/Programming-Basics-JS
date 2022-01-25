function firm(input) {
    let hoursNeeded = Number(input[0]);
    let days = Number(input[1]);
    let employeesCount = Number(input[2]);

    let bonus = employeesCount * 2 * days;
    days *= 0.9;
    let time = 8 * days;

    let totalTime = Math.floor(time + bonus);
    if (totalTime >= hoursNeeded) {
        console.log(`Yes!${totalTime - hoursNeeded} hours left.`);
    } else {
        console.log(`Not enough time!${hoursNeeded - totalTime} hours needed.`);
    }
}