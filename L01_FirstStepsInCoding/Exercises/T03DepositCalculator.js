function deposit(input){
    let depositSum = Number(input[0]);
    let period = Number(input[1]);
    let rate = Number(input[2]);

    let annualRate = depositSum * (rate / 100);
    let rateMonth = annualRate / 12;

    let sum = depositSum + period * rateMonth;
    console.log(sum);
}