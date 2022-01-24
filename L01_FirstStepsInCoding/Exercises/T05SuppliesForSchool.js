function calculatePrice (input){
    let penPackages = Number(input[0]); 
    let markersPackages = Number(input[1]); 
    let litersDetegrant = Number(input[2]);
    let discountPercent = Number(input[3]);

    let penPrice = penPackages * 5.80;
    let markerPrice = markersPackages * 7.20;
    let detegrantPrice = litersDetegrant * 1.20;

    let totalCost = (penPrice + markerPrice + detegrantPrice);
    let sumWithDiscount = totalCost - (totalCost * (discountPercent / 100));

    console.log(sumWithDiscount);
}