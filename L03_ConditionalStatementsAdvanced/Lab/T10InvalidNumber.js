function displayNumber(input) {
    const number = Number(input[0]);

    const isValid = number >= 100 && number <= 200 || number === 0;

    if (!isValid) {
        console.log("invalid");
    }
}