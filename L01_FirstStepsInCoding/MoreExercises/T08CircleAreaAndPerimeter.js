function caclArea(input) {
    let r = Number(input[0]);

    let area = r * r * Math.PI;
    let perimeter = 2 * r * Math.PI;

    console.log(area.toFixed(2));
    console.log(perimeter.toFixed(2));
}