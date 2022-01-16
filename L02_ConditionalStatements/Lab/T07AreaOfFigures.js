function calcArea(input) {
    let figure = input[0];
    let num = Number(input[1]);

    if (figure === "square") {
        let side = num * num;
        console.log(side.toFixed(3));
    } else if (figure === "rectangle") {
        let side2 = Number(input[2]);
        num = num * side2;
        console.log(num.toFixed(3));
    } else if (figure === "circle") {
        num = Math.PI * (num * num);
        console.log(num.toFixed(3));
    } else {
        let h = Number(input[2]);
        num = num * h / 2;
        console.log(num.toFixed(3));
    }
}