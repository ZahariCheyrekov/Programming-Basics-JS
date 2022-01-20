function solve(input) {
    let favoriteBook = input[0];

    let index = 1;
    let bookisFound = false;

    let nextBookName = input[index];
    while (nextBookName !== "No More Books") {
        if (nextBookName === favoriteBook) {
            bookisFound = true;
            break;
        }
        index++;
        nextBookName = input[index];
    }

    if (bookisFound == false) {
        console.log("The book you search is not here!");
        console.log(`You checked ${index - 1} books.`);
    } else {
        console.log(`You checked ${index - 1} books and found it.`);
    }
}