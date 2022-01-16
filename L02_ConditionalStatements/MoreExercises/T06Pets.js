function pets(input) {
    const days = Number(input[0]);
    const foodKG = Number(input[1]);
    const foodDogKG = Number(input[2]);
    const foodCatKG = Number(input[3]);
    const foodTurtleKG = Number(input[4]);

    const foodDog = days * foodDogKG;
    const foodCat = days * foodCatKG;
    const foodTurtle = (days * foodTurtleKG) / 1000;

    const totalFood = foodDog + foodCat + foodTurtle;

    const diff = Math.abs(foodKG - totalFood);

    if (totalFood <= foodKG) {
        const foodLeft = Math.floor(diff);
        console.log(`${foodLeft} kilos of food left.`);

    } else {
        const foodLeft = Math.ceil(diff);
        console.log(`${foodLeft} more kilos of food are needed.`);
    }
}