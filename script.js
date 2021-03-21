function multiplesof3and5(number) {
    let total = 0;
    // loop thorugh all values from 0 to our given number
    for(let i = 0; i < number; i++) {
        let remainderFor3 = i % 3;
        let remainderFor5 = i % 5;

        if(remainderFor3 === 0 || remainderFor5 === 0) {
            total = total + i
        }
    }
    return total;
}
multiplesof3and5(1000);