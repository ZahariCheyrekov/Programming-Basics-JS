function solve(input) {
    let tournamentsNumber = Number(input.shift());
    let allPoints = Number(input.shift());
    let currentPoints = 0;
    let points = 0;
    let winnerCounter = 0;
    let stageInTournament = input.shift();

    for (let i = 1; i <= tournamentsNumber; i++) {
        if (stageInTournament == 'W') {
            points = 2000;
            winnerCounter++;
        } else if (stageInTournament == 'F') {
            points = 1200;
        } else if (stageInTournament == 'SF') {
            points = 720;
        }
        allPoints += points;
        currentPoints += points;
        stageInTournament = input.shift();
    }

    let averagePoints = currentPoints / tournamentsNumber;
    let winnerPercent = winnerCounter / tournamentsNumber * 100;
    
    console.log(`Final points: ${allPoints}`);
    console.log(`Average points: ${Math.floor(averagePoints)}`);
    console.log(`${winnerPercent.toFixed(2)}%`);
}