function oddAndEvenSum(number) {
    let evenSum = 0;
    let oddSum = 0;
    let numberStr = number.toString();
    for (let i = 0; i < numberStr.length; i++) {
        if (Number(numberStr[i]) % 2 == 0) {
            evenSum += Number(numberStr[i]);
        } else {
            oddSum += Number(numberStr[i]);
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddAndEvenSum(3495892137259234);