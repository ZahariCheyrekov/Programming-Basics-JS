function hotelRoom(input) {
    const season = input[0];
    const nights = Number(input[1]);
    let priceApartment = 0;
    let priceStudio = 0;

    if ((season === "May") || (season === "October")) {
        priceStudio = 50;
        priceApartment = 65;
        
        if (nights > 7 && nights <= 14) {
            priceStudio = priceStudio - priceStudio * 0.05;

        } else if (nights > 14) {
            priceStudio = priceStudio - priceStudio * 0.30;
            priceApartment = priceApartment - priceApartment * 0.10;
        }

        priceStudio = nights * priceStudio;
        priceApartment = nights * priceApartment;

    } else if ((season === "June") || (season === "September")) {
        priceStudio = 75.20;
        priceApartment = 68.70;

        if (nights > 14) {
            priceStudio = priceStudio - priceStudio * 0.20;
            priceApartment = priceApartment - priceApartment * 0.10;
        }

        priceStudio = nights * priceStudio;
        priceApartment = nights * priceApartment;

    } else if ((season === "July") || (season === "August")) {
        priceStudio = 76;
        priceApartment = 77;

        if (nights > 14) {
            priceApartment = priceApartment - priceApartment * 0.10;
        }

        priceStudio = nights * priceStudio;
        priceApartment = nights * priceApartment;
    }

    console.log(`Apartment: ${priceApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${priceStudio.toFixed(2)} lv.`);
}