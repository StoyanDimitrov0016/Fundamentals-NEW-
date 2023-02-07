function passValidator(password) {
    isPassRightLength = false;
    let onlyLettersAndDigits = true;
    let atLeastTwoDigits = false;
    let numberCount = 0;

    if (password.length > 5 && password.length < 11) {
        isPassRightLength = true;
    }
    else {
        console.log('Password must be between 6 and 10 characters');
    }
    for (const char of password.split('')) {
        let asciiValue = char.charCodeAt();

        if (!(asciiValue >= 48 && asciiValue <= 57) && !(asciiValue >= 65 && asciiValue <= 90) && !(asciiValue >= 97 && asciiValue <= 122)) {
            onlyLettersAndDigits = false;
        }
        else {
            if (asciiValue > 47 && asciiValue < 58) {
                numberCount++;
            }
        }
    }
    if (!onlyLettersAndDigits) {
        console.log('Password must consist only of letters and digits');
    }
    if (numberCount >= 2) {
        atLeastTwoDigits = true;
    } else {
        console.log('Password must have at least 2 digits');
    }
    if (isPassRightLength && onlyLettersAndDigits && atLeastTwoDigits) {
        console.log('Password is valid');
    }
}
passValidator('logIn');
    //passValidator('MyPass123');
    //passValidator('########');
