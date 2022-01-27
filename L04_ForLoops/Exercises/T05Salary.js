function solve(input) {
    const n = Number(input[0]);
    let salary = Number(input[1]);

    let haveSalary = true;

    for (let i = 2; i <= n + 1; i++) {
        const website = input[i];

        if (website === "Facebook") {
            salary -= 150;
        } else if (website === "Instagram") {
            salary -= 100;
        } else if (website === "Reddit") {
            salary -= 50;
        }

        if (salary <= 0) {
            haveSalary = false;
            break;
        }
    }
    if (haveSalary) {
        console.log(salary);
    } else {
        console.log(`You have lost your salary.`);
    }
}