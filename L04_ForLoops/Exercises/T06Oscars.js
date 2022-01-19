function solve(input) {
    const nameActor = input.shift();
    let pointsActor = Number(input.shift());
    const numberExaminers = Number(input.shift());

    let nomination = false;

    for (let i = 1; i <= numberExaminers; i++) {
        let examiner = input.shift();
        let points = input.shift();

        pointsActor += ((examiner.length * points) / 2);

        if (pointsActor >= 1250.5) {
            nomination = true;
            console.log(`Congratulations, ${nameActor} got a nominee for leading role with ${pointsActor.toFixed(1)}!`)
            break;
        }
    }

    if (!nomination) {
        let diff = 1250.5 - pointsActor;
        console.log(`Sorry, ${nameActor} you need ${diff.toFixed(1)} more!`)
    }
}