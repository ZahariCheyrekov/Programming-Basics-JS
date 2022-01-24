function repaint(input) {
    let plastic = Number(input[0]);
    let paintLiters = Number(input[1]);
    let diluentLiters = Number(input[2]);
    let hours = Number(input[3]);

    let sumPerPlastic = (plastic + 2) * 1.50;
    let sumPaint = ((paintLiters + (paintLiters / 10)) * 14.50);
    let sumDiluent = diluentLiters * 5;

    let sumMaterials = (sumPerPlastic + sumPaint + sumDiluent + 0.40);
    let sumWorkers = (sumMaterials * 0.30) * hours;

    let finalSum = sumMaterials + sumWorkers;

    console.log(finalSum);
}