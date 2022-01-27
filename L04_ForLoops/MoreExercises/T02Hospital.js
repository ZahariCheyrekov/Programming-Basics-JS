function solve(input) {
    const period = Number(input.shift());
    let doctors = 7;
    let treatedPatients = 0;
    let untreatedPatients = 0;

    for (let i = 1; i <= period; i++) {
        let numPatients = Number(input.shift());

        if (i % 3 == 0) {
            if (treatedPatients < untreatedPatients) {
                doctors++;
            }
        }

        if (numPatients <= doctors) {
            treatedPatients += numPatients;
        } else {
            treatedPatients = treatedPatients + doctors;
            untreatedPatients = untreatedPatients + (numPatients - doctors);

        }
    }

    console.log(`Treated patients: ${treatedPatients}.`);
    console.log(`Untreated patients: ${untreatedPatients}.`);
}