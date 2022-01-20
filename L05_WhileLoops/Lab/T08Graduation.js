function graduation(input) {
    let name = input[0];
    let grades = 1;
    let sum = 0;
    let excluded = 0;
    let index = 0;
    while (grades <= 12) {
        index++;
        let grade = Number(input[index]);
        if (grade < 4.00) {
            excluded++;
            if (excluded > 1) {
                console.log(`${name} has been excluded at ${grades} grade`);
                break;
            }
        }
        if (grade >= 4.00) {
            sum += grade;
            grades++;
        }
    }
    let average = sum / 12;

    if (excluded < 2) {
        console.log(`${name} graduated. Average grade: ${average.toFixed(2)}`);
    }
}