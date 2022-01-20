function solve(input) {
    let people = Number(input.shift());
    let namePresentation = input.shift();
    let finalSum = 0;
    let numberOfGrades = 0;

    while (namePresentation !== "Finish") {
        let gradeSum = 0;
        let taskName = "";

        for (let competitors = 1; competitors <= people; competitors++) {
            let grade = Number(input.shift());
            numberOfGrades++;
            gradeSum += grade;
            taskName = namePresentation;
        }

        finalSum += gradeSum;
        console.log(`${taskName} - ${(gradeSum / people).toFixed(2)}.`);

        namePresentation = input.shift();
    }

    console.log(`Student's final assessment is ${(finalSum / numberOfGrades).toFixed(2)}.`);
}