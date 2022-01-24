function paintHouse(input) {
    let x = Number(input[0]);
    let y = Number(input[1]);
    let h = Number(input[2]);

    let side = x * y;
    let window = 1.5 * 1.5;
    let twoSides = side * 2 - window * 2;
    let backSide = x * x;
    let entrance = 1.2 * 2;
    let frondAndBackSide = backSide * 2 - entrance;
    let totalArea = twoSides + frondAndBackSide;
    let greenPaint = totalArea / 3.4;
    let roofSides = 2 * (x * y);
    let roof = 2 * (x * h / 2);
    let roofArea = roof + roofSides;
    let redPaint = roofArea / 4.3;

    console.log(greenPaint.toFixed(2));
    console.log(redPaint.toFixed(2));
}