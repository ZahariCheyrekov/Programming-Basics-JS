function solve(arr) {
    let sum = 0;
    let musala = 0;
    let monbolan = 0;
    let kilimanajdaro = 0;
    let k2 = 0;
    let everest = 0;

    for (i = 1; i < arr.length; i++) {
        let arrFromI = Number(arr[i]);
        sum += arrFromI;
        if (arrFromI <= 5) {
            musala += arrFromI;
        } else if (arrFromI <= 12) {
            monbolan += arrFromI;
        } else if (arrFromI <= 25) {
            kilimanajdaro += arrFromI;
        } else if (arrFromI <= 40) {
            k2 += arrFromI;
        } else if (arrFromI >= 41) {
            everest += arrFromI
        }
    }

    console.log(((musala / sum) * 100).toFixed(2) + '%');
    console.log(((monbolan / sum) * 100).toFixed(2) + '%');
    console.log(((kilimanajdaro / sum) * 100).toFixed(2) + '%');
    console.log(((k2 / sum) * 100).toFixed(2) + '%');
    console.log(((everest / sum) * 100).toFixed(2) + '%');
}