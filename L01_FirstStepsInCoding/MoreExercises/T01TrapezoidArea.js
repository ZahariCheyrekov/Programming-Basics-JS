function calcArea(inut) {
    let b1 = Number(inut[0]);
    let b2 = Number(inut[1]);
    let h = Number(inut[2]);

    let area = (b1 + b2) * h / 2;

    console.log(area.toFixed(2));
}