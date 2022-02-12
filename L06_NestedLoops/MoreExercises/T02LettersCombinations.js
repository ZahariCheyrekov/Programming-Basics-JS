function solve(input) {
    let startLetter = input[0];
    let endLetter = input[1];
    let skipLetter = input[2];

    let start = startLetter.charCodeAt(0);
    let end = endLetter.charCodeAt(0);
    let skip = skipLetter.charCodeAt(0);

    // let text = String.fromCharCode(72, 69, 76, 76, 79);
    let text = "";
    let combinationsFound = 0;
   
    for (let i = start; i <= end; i++) {
        if (i !== skip) {

            for (let j = start; j <= end; j++) {
                if (j != skip) {

                    for (let k = start; k <= end; k++) {
                        if (k != skip) {

                            text += String.fromCharCode(i, j, k) + " ";
                        
                            combinationsFound++;
                        }
                    }
                }
            }
        }
    }
    
    console.log(text + combinationsFound);
}
