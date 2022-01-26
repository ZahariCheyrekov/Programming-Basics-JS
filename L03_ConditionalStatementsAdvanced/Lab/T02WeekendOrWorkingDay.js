function weekendOrWorkingDay(input) {
    const day = input[0];

    let workOrRest = "";

    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            workOrRest = "Working day";
            break;

        case "Saturday":
        case "Sunday":
            workOrRest = "Weekend";
            break;

        default:
            workOrRest = "Error";
            break;
    }

    console.log(workOrRest);
}