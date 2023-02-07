function calculator(num1, num2, operator) {
    let result = 0;
    switch (operator) {
        case 'multiply':
            let multiplication = (x, y) => x * y;
            result = multiplication(num1, num2);
            break;
        case 'divide':
            let division = (x, y) => x / y;
            result = division(num1, num2);
            break;
        case 'add':
            let addition = (x, y) => x + y;
            result = addition(num1, num2);
            break;
        case 'subtract':
            let subtraction = (x, y) => x - y;
            result = subtraction(num1, num2);
            break;
    }
    console.log(result);
}
calculator(10, 2, 'divide');