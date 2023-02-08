function sumFirstAndLast(numbers) {
    let firstNum = Number(numbers.shift());
    let lastNum = Number(numbers.pop());
    console.log(firstNum + lastNum);
}
sumFirstAndLast(['20', '30', '40']);
sumFirstAndLast(['5', '10']);