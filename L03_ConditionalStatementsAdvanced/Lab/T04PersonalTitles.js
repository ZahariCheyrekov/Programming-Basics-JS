function personalTitles(input) {
    const age = Number(input[0]);
    const sex = input[1];

    let title = "";

    if (sex === "m") {
        if (age >= 16) {
            title = "Mr.";
        } else {
            title = "Master";
        }

    } else if (sex === "f") {
        if (age >= 16) {
            title = "Ms.";
        } else {
            title = "Miss";
        }
    }

    console.log(title);
}