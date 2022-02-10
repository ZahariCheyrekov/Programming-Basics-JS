function calculatePrice(input){
    let dogPackeges = Number(input[0]);
    let catPackeges = Number(input[1]); 

    let total = (dogPackeges * 2.50) + (catPackeges * 4);
  
    console.log(`${total} lv.`);
}
