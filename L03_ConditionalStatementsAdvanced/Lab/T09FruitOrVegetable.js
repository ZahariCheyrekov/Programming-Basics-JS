function fruitOrVegetable(input) {
    const product = input[0];

    let nameProduct = "";

    switch (product) {
        case "banana":
        case "apple":
        case "kiwi":
        case "cherry":
        case "lemon":
        case "grapes":
            nameProduct = "fruit";
            break;

        case "tomato":
        case "cucumber":
        case "pepper":
        case "carrot":
            nameProduct = "vegetable";
            break;

        default:
            nameProduct = "unknown";
            break;
    }

    console.log(nameProduct);
}