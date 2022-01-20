function solve(input) {
    let width = Number(input[0]);
    let length = Number(input[1]);
    let height = Number(input[2]);

    let volume = width * length * height;
    let movedCartons = 0;
    let index = 3;

    let data = input[index];
    while (data != "Done") {
        let numCartons = Number(data);

        if (movedCartons >= volume) {
            console.log(`No more free space! You need ${Math.abs(movedCartons - volume)} Cubic meters more.`);
            return;
        }
        movedCartons += numCartons;

        index++;
        data = input[index];
    }

    console.log(`${Math.abs(movedCartons - volume)} Cubic meters left.`);
}
