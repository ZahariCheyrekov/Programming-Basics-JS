function solve(input) {
    const student = Number(input.shift());
    let couter2 = 0;
    let couter3 = 0;
    let couter4 = 0;
    let couter5 = 0;
    let sum = 0;

    for (let i = 1; i <= student; i++) {
        const grade = Number(input.shift());

        if (grade < 3.00) {
            couter2++;
        } else if (grade < 4.00)
            couter3++;
        else if (grade < 5.00) {
            couter4++;
        } else {
            couter5++;
        }
        sum = (sum + grade);
    }

    const g5 = (couter5 / student) * 100;
    const g4 = (couter4 / student) * 100;
    const g3 = (couter3 / student) * 100;
    const g2 = (couter2 / student) * 100;
    const average = sum / student;

    console.log(`Top students: ${g5.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${g4.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${g3.toFixed(2)}%`);
    console.log(`Fail: ${g2.toFixed(2)}% `);
    console.log(`Average: ${average.toFixed(2)}`);
}