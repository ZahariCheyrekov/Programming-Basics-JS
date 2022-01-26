function getPoint(input) {
    const x1 = Number(input[0]);
    const y1 = Number(input[1]);
    const x2 = Number(input[2]);
    const y2 = Number(input[3]);
    const x = Number(input[4]);
    const y = Number(input[5]);

    const firstCondition = (x == x1 || x == x2) && (y >= y1 && y <= y2);
    const secondCondition = (y == y1 || y == y2) && (x >= x1 && x <= x2);

    if (firstCondition || secondCondition) {
        console.log("Border");
    } else {
        console.log("Inside / Outside");
    }
}