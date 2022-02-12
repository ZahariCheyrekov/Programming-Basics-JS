function solve(input) {
    let number1 = +input.shift();
    let number2 = +input.shift();
    let maxPasswords = +input.shift();

    let passwordsCounter = 0;
    let symbol1 = 35;
    let symbol2 = 64;
    let combo = '';

    for (let symbol3 = 1; symbol3 <= number1; symbol3++) {
        for (let symbol4 = 1; symbol4 <= number2; symbol4++) {

            let codeToCharSymbol1 = String.fromCharCode(symbol1);
            let codeToCharSymbol2 = String.fromCharCode(symbol2);

            combo += `${codeToCharSymbol1}${codeToCharSymbol2}${symbol3}${symbol4}${codeToCharSymbol2}${codeToCharSymbol1}|`;
            passwordsCounter++;

            if (passwordsCounter >= maxPasswords) {
                console.log(combo);
                return;
            }

            symbol1++;
            
            if (symbol1 > 55) {
                symbol1 = 35;
            }

            symbol2++;
    
            if (symbol2 > 96) {
                symbol2 = 64;
            }
        }
    }
    
    console.log(combo);
}
