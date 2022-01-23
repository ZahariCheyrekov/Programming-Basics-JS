function solve(input) {
    const cash1lvNum = Number(input.shift());
    const cash2lvNum = Number(input.shift());
    const cash5lvNum = Number(input.shift());
    const sum = Number(input.shift());

    let oneLv = 1;
    let twoLv = 2;
    let fiveLv = 5;

    for (let i = 0; i <= cash1lvNum; i++) {
        for (let j = 0; j <= cash2lvNum; j++) {
            for (let k = 0; k <= cash5lvNum; k++) {
                if ((i * oneLv) + (j * twoLv) + (k * fiveLv) == sum) {
                    console.log(`${i} * 1 lv. + ${j} * 2 lv. + ${k} * 5 lv. = ${sum} lv.`);
                }
            }
        }
    }
}