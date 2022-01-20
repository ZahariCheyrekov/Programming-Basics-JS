function solve(input) {
    let sector = input[0];
    let rows = Number(input[1]);
    const seats = Number(input[2]);

    let factor = 0;
    let counter = 0;

    let start = 'A'.charCodeAt(0);
    let end = sector.charCodeAt(0);
    let innerStart = 'a'.charCodeAt(0);

    for (let i = start; i <= end; i++, rows++) {
        for (let j = 1; j <= rows; j++) {
            factor = (j % 2 == 0) ? 2 : 0;

            for (let k = innerStart; k < innerStart + seats + factor; k++) {
                console.log(String.fromCharCode(i) + j + String.fromCharCode(k));
                counter++;
            }
        }
    }

    console.log(counter);
}