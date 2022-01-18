function schoolCamp(input) {
    const season = input[0];
    const group = input[1];
    const numberStudents = Number(input[2]);
    const nights = Number(input[3]);

    let sport = "";
    let price = 0;

    switch (season) {
        case "Winter":
            if ((group === "boys") || (group === "girls")) {
                price = numberStudents * nights * 9.60;
                if (group === "boys") {
                    sport = "Judo";
                }
                if (group === "girls") {
                    sport = "Gymnastics";
                }

            } else if (group === "mixed") {
                sport = "Ski";
                price = nights * numberStudents * 10;
            }
            break;

        case "Spring":
            if ((group === "boys") || (group === "girls")) {
                price = numberStudents * nights * 7.20;
                if (group === "boys") {
                    sport = "Tennis";
                }
                if (group === "girls") {
                    sport = "Athletics";
                }
            } else if (group === "mixed") {
                sport = "Cycling";
                price = nights * numberStudents * 9.50;
            }
            break;

        case "Summer":
            if ((group === "boys") || (group === "girls")) {
                price = numberStudents * nights * 15;
                if (group === "boys") {
                    sport = "Football";
                }
                if (group === "girls") {
                    sport = "Volleyball";
                }
            } else if (group === "mixed") {
                sport = "Swimming";
                price = numberStudents * nights * 20;
            }
            break;
    }

    if (numberStudents >= 50) {
        price = price - price * 0.50;
    } else if (numberStudents >= 20) {
        price = price - price * 0.15;
    } else if (numberStudents >= 10) {
        price = price - price * 0.05;
    }

    console.log(`${sport} ${price.toFixed(2)} lv.`);
}