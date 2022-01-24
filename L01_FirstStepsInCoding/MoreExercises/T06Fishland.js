function calculate(input) {
    let sc = Number(input[0]);
    let ca = Number(input[1]);
    let pa = Number(input[2]);
    let sa = Number(input[3]);
    let mi = Number(input[4]);

    let paPrice = sc + sc * 0.60;
    let paSum = pa * paPrice;
    let saPrice = ca + ca * 0.80;
    let saSum = saPrice * sa;
    let miSum = mi * 7.50;

    let totalSum = paSum + saSum + miSum;
    console.log(totalSum.toFixed(2));
}