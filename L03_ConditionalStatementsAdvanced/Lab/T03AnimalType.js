function getType(input) {
    const animal = input[0];

    let type = "";

    switch (animal) {
        case "dog":
            type = "mammal";
            break;

        case "crocodile":
        case "tortoise":
        case "snake":
            type = "reptile";
            break;

        default:
            type = "unknown";
            break;
    }

    console.log(type);
}