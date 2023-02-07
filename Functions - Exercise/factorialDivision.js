function factorialDivision(num1, num2) {
    let factorialFirstNum = num1;
    let factorialSecondNum = num2;
    for (let i = num1 - 1; i >= 1; i--) {
        factorialFirstNum *= i;
    }
    for (let i = num2 - 1; i >= 1; i--) {
        factorialSecondNum *= i;
    }
    console.log((factorialFirstNum / factorialSecondNum).toFixed(2));
}
factorialDivision(5, 2);