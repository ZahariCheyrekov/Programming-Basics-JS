function fillPool(input) {
    const V = Number(input[0]);
    const P1 = Number(input[1]);
    const P2 = Number(input[2]);
    const H = Number(input[3]);

    const p1Hours = P1 * H;
    const p2Hours = P2 * H;
    const p1p2 = p1Hours + p2Hours;
    const over = p1p2 - V;

    const percentP1 = p1Hours / V * 100;
    const percentP2 = p2Hours / V * 100;
    const finalPercent = percentP1 + percentP2;
    const percentP1f = p1Hours / p1p2 * 100;
    const percentP2f = p2Hours / p1p2 * 100;

    if (p1p2 <= V) {
        console.log(
            `"The pool is ${finalPercent.toFixed(2)}% full.` +
            `Pipe 1: ${percentP1f.toFixed(2)}%.` +
            ` Pipe 2: ${percentP2f.toFixed(2)}%."`)
    } else {
        console.log(`For ${H} hours the fool overflows with ${over} liters.`);
    }
}