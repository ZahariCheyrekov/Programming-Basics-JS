function displayWeather(input) {
    let degrees = Number(input[0]);

    var type = "";

    if (degrees >= 26.00 && degrees <= 35.00) {
        type = "Hot";

    } else if (degrees >= 20.1 && degrees <= 25.9) {
        type = "Warm";

    } else if (degrees >= 15.00 && degrees <= 20.00) {
        type = "Mild";

    } else if (degrees >= 12.00 && degrees <= 14.9) {
        type = "Cool";

    } else if (degrees >= 5.00 && degrees <= 11.9) {
        type = "Cold";

    } else {
        type = "unknown";
    }

    console.log(type);
}