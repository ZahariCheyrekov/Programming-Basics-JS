function convert(input) {
    let degrees = Number(input[0]);
    let fahrenheit = degrees * 1.8 + 32;

    console.log(fahrenheit.toFixed(2));
}