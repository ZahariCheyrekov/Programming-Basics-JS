function solve(input) {
    let l = Number(input.shift());
    let w = Number(input.shift());
    let area = l * w;
    let total = 0;

    while (area >= total) {
        let current = input.shift();

        if (current == "STOP") {
            break;
        }

        let piece = Number(current);
        total += piece;
    }

    if (total > area) {
        let need = total - area;
        console.log(`No more cake left! You need ${need} pieces more.`);
    } else {
        let left = area - total;
        console.log(`${left} pieces are left.`);
    }
}