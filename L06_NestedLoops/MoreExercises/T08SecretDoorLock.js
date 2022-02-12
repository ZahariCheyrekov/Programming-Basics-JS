function solve(input) {
    const firstNum = Number(input.shift());
    const secondNum = Number(input.shift());
    const finalNum = Number(input.shift());

    for (let i = 2; i <= firstNum; i += 2) {
        for (let j = 2; j <= secondNum; j++) {
         
            let klsIsPrime = true;

            for (let k = 2; k < j / 2 + 1; k++) {
            
                if (j % k == 0 && j != 2) {
                    klsIsPrime = false;
                    break;
                }
            }

            for (let l = 2; l <= finalNum; l += 2) {
                
                if (!klsIsPrime) {
                    break;
                }
                
                console.log(`${i} ${j} ${l}`);
            }
        }
    }
}
