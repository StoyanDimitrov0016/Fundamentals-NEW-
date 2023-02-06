function evenAndOddSubtraction(array) {
    let sumOddNumbers = 0;
    let sumEvenNumbers = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            sumEvenNumbers += array[i];
        } else {
            sumOddNumbers += array[i];
        }
    }
    let result = sumEvenNumbers - sumOddNumbers;
    console.log(result);
}
evenAndOddSubtraction([1, 2, 3, 4, 5, 6]);