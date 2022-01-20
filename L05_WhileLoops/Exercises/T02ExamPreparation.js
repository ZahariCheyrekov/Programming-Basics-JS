function examPreparation(input) {
    let badGradesAllowed = Number(input.shift());
    let badGradesCounter = 0;
    let goodGradesCounter = 0;
    let gradesSum = 0;
    let lastProblem = "";
    let nameOfExcercise;
    let grade = 0

    while (badGradesCounter < badGradesAllowed) {
        nameOfExcercise = input.shift();
        grade = Number(input.shift());

        if (nameOfExcercise == "Enough") {
            let totalCounter = badGradesCounter + goodGradesCounter;
            let averageScore = gradesSum / totalCounter;
            console.log(`Average score: ${averageScore.toFixed(2)}`);
            console.log(`Number of problems: ${totalCounter}`);
            console.log(`Last problem: ${lastProblem} `);
            break;
        }

        if (grade <= 4) {
            badGradesCounter++;
        } else {
            goodGradesCounter++;
        }
        
        lastProblem = nameOfExcercise;
        gradesSum += grade;

    } if (badGradesCounter == badGradesAllowed) {
        console.log(`You need a break, ${badGradesCounter} poor grades.`)
    }
}