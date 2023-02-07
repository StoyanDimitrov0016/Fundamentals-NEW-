function signCheck(num1, num2, num3) {
    // In this task I am not allowed to use multiplication 
    let result = '';
    if ((num1 < 0 && num2 < 0) || (num1 > 0 && num2 > 0)) {
        if (num3 > 0) {
            result = 'Positive'
        }
        if (num3 < 0) {
            result = 'Negative';
        }
    }
    else {
        if (num3 > 0) {
            result = 'Negative';
        }
        if (num3 < 0) {
            result = 'Positive';
        }
    }
    console.log(result);
}
signCheck(5, 12, -15);