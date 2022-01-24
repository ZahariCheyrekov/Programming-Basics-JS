function calcuateLeters(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3]);

    let volume = length * width * height;
    let volumeLeters = volume / 1000;
    let spaceTaken = percent / 100;

    let letersNeeded = volumeLeters * (1 - spaceTaken);

    console.log(letersNeeded);
}