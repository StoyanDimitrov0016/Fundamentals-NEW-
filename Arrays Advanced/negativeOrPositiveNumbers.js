function appendPrependNums(numbersInString) {
    let result = [];
    let numbers = numbersInString.map(Number);
    numbers.forEach(number => {
        if (number < 0) {
            result.unshift(number);
        } else {
            result.push(number);
        }
    });
    console.log(result.join('\n'));
}
appendPrependNums(['7', '-2', '8', '9']);
appendPrependNums(['3', '-2', '0', '-1']);