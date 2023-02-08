function bombNums(numbers, specialBombNumber) {
    let specialNumber = specialBombNumber.shift();
    let power = specialBombNumber.shift();

    for (let i = 0; i < numbers.length; i++) {

        let currentNumber = numbers[i];

        if (currentNumber === specialNumber) {
            numbers.splice(Math.max((i - power), 0), power * 2 + 1);
            i = 0;
        }
    }
    console.log(numbers.reduce((a, b) => a + b, 0));
}
bombNums([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1])