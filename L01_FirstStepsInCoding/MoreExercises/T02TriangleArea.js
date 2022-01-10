function calcArea(input) {
    let side = Number(input[0]);
    let height = Number(input[1]);

    let area = side * height / 2;

    console.log(area.toFixed(2));
}