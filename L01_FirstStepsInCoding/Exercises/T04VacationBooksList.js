function calculatePages (input){
    let numberOfPages = Number(input[0]);
    let pages = Number(input[1]);
    let days = Number(input[2]);

    let timeForBook = numberOfPages / pages;
    let hoursPerDay = timeForBook / days;

    console.log(hoursPerDay);
}