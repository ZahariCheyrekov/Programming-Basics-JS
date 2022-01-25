function guessPassword(input) {
    let phrase = "s3cr3t!P@ssw0rd";

    let password = input[0];

    if (password === phrase) {
        console.log("Welcome")
    } else {
        console.log("Wrong password!")
    }
}