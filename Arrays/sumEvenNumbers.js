function sumEvenNumbers(input) {
    let arraySum = 0;
    for (let i = 0; i < input.length; i++) {
        let currentElement = Number(input[i]);
        if (currentElement % 2 == 0) {
            arraySum += Number(input[i]);
        }
    }
    console.log(arraySum);
}
sumEvenNumbers(['1', '2', '3', '4', '5', '6']);