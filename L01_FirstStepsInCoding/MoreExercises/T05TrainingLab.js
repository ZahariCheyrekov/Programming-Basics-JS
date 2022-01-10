function calcPlaces(input) {
    let w = Number(input[0]);
    let h = Number(input[1]);

    let hToCm = h * 100 - 100;
    let wToCm = w * 100;

    let numToRow = Math.floor(wToCm / 120);
    let numRows = Math.floor(hToCm / 70);

    let allDesks = numRows * numToRow - 3;
    console.log(allDesks);
}